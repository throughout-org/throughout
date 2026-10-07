import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import JobApplication from "@/models/JobApplication";
import { dbConnect } from "@/lib/mongoose";
import { sendEmail } from "@/lib/email";
import { uploadPdfToDrive } from "@/lib/google";

export const runtime = "nodejs";

type JobApplicationPayload = {
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeUrl: string;
  referralSource?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function buildPdfFileName(fileName: string): string {
  const base = fileName.replace(/\.pdf$/i, "") || "resume";
  const safeBase = base.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 80);
  const uniqueSuffix = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  return `${safeBase}_${uniqueSuffix}.pdf`;
}

const DEFAULT_GOOGLE_DRIVE_FOLDER_ID = "1t7nUtw3_r5LZYmUNksDpc4sekGDnZoLo";

function getGoogleDriveFolderId(): string {
  const explicitId = process.env.GOOGLE_DRIVE_FOLDER_ID?.trim();
  if (explicitId) return explicitId;

  const folderUrl = process.env.GOOGLE_DRIVE_FOLDER_URL?.trim();
  if (folderUrl) {
    const match = folderUrl.match(/\/folders\/([a-zA-Z0-9_-]+)/);
    if (match?.[1]) return match[1];
  }

  return DEFAULT_GOOGLE_DRIVE_FOLDER_ID;
}

function getAllowedOrigins(): string[] {
  const fromEnv = process.env.CORS_ALLOWED_ORIGINS;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv
      .split(",")
      .map((o) => o.trim())
      .filter(Boolean);
  }

  return ["http://localhost:3000", "http://localhost:3001"];
}

function corsHeaders(origin: string | null): HeadersInit {
  const allowed = new Set(getAllowedOrigins());
  const allowOrigin = origin && allowed.has(origin) ? origin : "";

  return {
    ...(allowOrigin ? { "Access-Control-Allow-Origin": allowOrigin } : {}),
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    ...(allowOrigin ? { Vary: "Origin" } : {}),
  };
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("origin")),
  });
}

async function uploadPdfToGoogleDrive(file: File): Promise<string> {
  if (file.type !== "application/pdf") {
    throw new Error("Resume must be a PDF file");
  }

  return uploadPdfToDrive(
    await file.arrayBuffer(),
    buildPdfFileName(file.name || "resume.pdf"),
    getGoogleDriveFolderId(),
  );
}

async function uploadPdfToCloudinary(file: File): Promise<string> {
  const cloudinaryUrl = process.env.CLOUDINARY_URL?.trim();
  if (!cloudinaryUrl) {
    throw new Error(
      "CLOUDINARY_URL is missing for Cloudinary fallback upload.",
    );
  }

  cloudinary.config({ cloudinary_url: cloudinaryUrl });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const publicId = `resumes/${buildPdfFileName(file.name || "resume.pdf")}`;

  const uploadResult = await new Promise<{ secure_url?: string; url?: string }>(
    (resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: "raw",
          public_id: publicId,
          use_filename: false,
          unique_filename: false,
          overwrite: false,
          format: "pdf",
        },
        (error: unknown, result: unknown) => {
          if (error) return reject(error);
          if (!result) return reject(new Error("Cloudinary upload failed"));
          resolve({
            secure_url: (result as unknown as { secure_url?: string })
              .secure_url,
            url: (result as unknown as { url?: string }).url,
          });
        },
      );

      stream.end(buffer);
    },
  );

  const url = uploadResult.secure_url || uploadResult.url;
  if (!url) {
    throw new Error("Cloudinary did not return a URL");
  }

  return url;
}

function shouldFallbackToCloudinary(error: unknown): boolean {
  const message =
    error && typeof error === "object" && "message" in error
      ? String((error as { message?: unknown }).message).toLowerCase()
      : "";

  return (
    message.includes("service accounts do not have storage quota") ||
    message.includes("missing google service account credentials")
  );
}

function isGoogleInvalidGrant(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;

  const message =
    "message" in error ? String((error as { message?: unknown }).message) : "";
  if (message.toLowerCase().includes("invalid_grant")) return true;

  const maybeResponse = (error as { response?: unknown }).response;
  if (!maybeResponse || typeof maybeResponse !== "object") return false;

  const maybeData = (maybeResponse as { data?: unknown }).data;
  if (!maybeData || typeof maybeData !== "object") return false;

  return (
    "error" in maybeData &&
    String((maybeData as { error?: unknown }).error).toLowerCase() ===
      "invalid_grant"
  );
}

async function uploadResume(file: File): Promise<string> {
  try {
    return await uploadPdfToGoogleDrive(file);
  } catch (error) {
    if (
      process.env.CLOUDINARY_URL?.trim() &&
      shouldFallbackToCloudinary(error)
    ) {
      return uploadPdfToCloudinary(file);
    }
    throw error;
  }
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  try {
    const requestContentType = request.headers.get("content-type") || "";

    let jobTitle: string | undefined;
    let name: string | undefined;
    let email: string | undefined;
    let phone: string | undefined;
    let coverLetter: string | undefined;
    let resumeUrl: string | undefined;
    let referralSource: string | undefined;
    let resumeFileName: string | undefined;

    if (requestContentType.includes("multipart/form-data")) {
      const formData = await request.formData();

      jobTitle = (formData.get("jobTitle") as string) || undefined;
      const internshipTitle = (formData.get("internshipTitle") as string) || "";
      if (!jobTitle && internshipTitle) jobTitle = internshipTitle;

      name = (formData.get("name") as string) || undefined;
      email = (formData.get("email") as string) || undefined;
      phone = (formData.get("phone") as string) || undefined;
      coverLetter = (formData.get("coverLetter") as string) || undefined;
      referralSource = (formData.get("referralSource") as string) || undefined;

      const resume = formData.get("resume");
      if (!resume || typeof resume !== "object") {
        return NextResponse.json(
          { error: "resume is required" },
          { status: 400, headers: corsHeaders(origin) },
        );
      }

      const file = resume as File;
      resumeFileName = file.name || undefined;

      // Basic file validations (also done on frontend)
      if (file.size <= 0) {
        return NextResponse.json(
          { error: "Resume file is required" },
          { status: 400, headers: corsHeaders(origin) },
        );
      }
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: "Resume file size must be less than 5MB" },
          { status: 400, headers: corsHeaders(origin) },
        );
      }

      resumeUrl = await uploadResume(file);
    } else {
      const body = (await request.json()) as Partial<JobApplicationPayload>;
      jobTitle = body.jobTitle;
      name = body.name;
      email = body.email;
      phone = body.phone;
      coverLetter = body.coverLetter;
      resumeUrl = body.resumeUrl;
      referralSource = body.referralSource;
    }

    if (
      !isNonEmptyString(jobTitle) ||
      !isNonEmptyString(name) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(phone) ||
      !isNonEmptyString(coverLetter) ||
      !isNonEmptyString(resumeUrl)
    ) {
      return NextResponse.json(
        {
          error:
            "name, email, phone, jobTitle, coverLetter, and resumeUrl are required.",
        },
        { status: 400, headers: corsHeaders(origin) },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400, headers: corsHeaders(origin) },
      );
    }

    await dbConnect();

    const created = await JobApplication.create({
      jobTitle,
      name,
      email,
      phone,
      coverLetter,
      resumeUrl,
      referralSource: referralSource || "",
      resumeFileName: resumeFileName || "",
    });

    let emailResult: Awaited<ReturnType<typeof sendEmail>> | undefined;

    try {
      emailResult = await sendEmail({
        to: email,
        subject: `Thanks for applying — ${jobTitle}`,
        leadName: name,
        message:
          `Thanks for applying for the ${jobTitle} position at Throughout (PVT) LTD.\n\n` +
          `We have received your application and our team will review it soon. ` +
          `If your profile matches what we're looking for, we’ll contact you with next steps.\n\n` +
          `Best regards,\nThroughout (PVT) LTD Team`,
      });
    } catch (e) {
      emailResult = { success: false, error: String(e) };
    }

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully!",
        data: { id: String(created._id) },
        email: emailResult,
      },
      { status: 201, headers: corsHeaders(origin) },
    );
  } catch (error) {
    // Stringified: Workers logs drop non-serialisable Error objects.
    console.error("Job application error:", error instanceof Error ? error.stack || error.message : String(error));

    if (isGoogleInvalidGrant(error)) {
      return NextResponse.json(
        {
          error:
            "Google authentication failed (invalid_grant). This usually means GOOGLE_REFRESH_TOKEN is expired/revoked, the GOOGLE_REDIRECT_URI/client settings don’t match the token, or the server clock is incorrect. Re-generate the refresh token and confirm GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET/GOOGLE_REDIRECT_URI match the OAuth consent configuration.",
        },
        { status: 500, headers: corsHeaders(origin) },
      );
    }

    const isQuotaError =
      error &&
      typeof error === "object" &&
      "message" in error &&
      typeof (error as { message?: unknown }).message === "string" &&
      String((error as { message?: unknown }).message)
        .toLowerCase()
        .includes("service accounts do not have storage quota");

    if (isQuotaError) {
      return NextResponse.json(
        {
          error:
            "Google Drive rejected upload because the target is not a Shared Drive folder. Create/use a Shared Drive folder, share it with the service account, and set GOOGLE_DRIVE_FOLDER_ID to that folder.",
        },
        { status: 500, headers: corsHeaders(origin) },
      );
    }

    const message =
      process.env.NODE_ENV !== "production" &&
      error &&
      typeof error === "object" &&
      "message" in error
        ? String((error as { message?: unknown }).message)
        : "Failed to submit application. Please try again.";

    return NextResponse.json(
      { error: message },
      { status: 500, headers: corsHeaders(origin) },
    );
  }
}
