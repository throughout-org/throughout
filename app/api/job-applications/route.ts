import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import JobApplication from "@/models/JobApplication";
import { dbConnect } from "@/lib/mongoose";

export const runtime = "nodejs";

type JobApplicationPayload = {
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeUrl: string;
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
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

async function uploadPdfToCloudinary(file: File): Promise<string> {
  cloudinary.config({ cloudinary_url: requireEnv("CLOUDINARY_URL") });

  if (file.type !== "application/pdf") {
    throw new Error("Resume must be a PDF file");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadResult = await new Promise<{ secure_url?: string; url?: string }>(
    (resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "resumes",
          resource_type: "raw",
          use_filename: true,
          unique_filename: true,
        },
        (error, result) => {
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
  if (!url) throw new Error("Cloudinary did not return a URL");
  return url;
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

      resumeUrl = await uploadPdfToCloudinary(file);
    } else {
      const body = (await request.json()) as Partial<JobApplicationPayload>;
      jobTitle = body.jobTitle;
      name = body.name;
      email = body.email;
      phone = body.phone;
      coverLetter = body.coverLetter;
      resumeUrl = body.resumeUrl;
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
      resumeFileName: resumeFileName || "",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully!",
        data: created,
      },
      { status: 201, headers: corsHeaders(origin) },
    );
  } catch (error) {
    console.error("Job application error:", error);

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
