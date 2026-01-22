import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const internshipSlug = formData.get("internshipSlug") as string;
    const internshipTitle = formData.get("internshipTitle") as string;
    const resume = formData.get("resume") as File;

    // Validate required fields
    if (!name || !email || !phone || !coverLetter || !resume) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Validate file type
    if (resume.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Resume must be a PDF file" },
        { status: 400 },
      );
    }

    // Validate file size (max 5MB)
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Resume file size must be less than 5MB" },
        { status: 400 },
      );
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(
      process.cwd(),
      "uploads",
      "internship-applications",
    );
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch {
      // Directory might already exist, that's okay
    }

    // Save the resume file
    const timestamp = Date.now();
    const sanitizedName = name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    const fileName = `${timestamp}_${sanitizedName}_resume.pdf`;
    const filePath = path.join(uploadsDir, fileName);

    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Email via SMTP (Ethereal)
    // IMPORTANT: do not hardcode credentials; use env vars.
    const smtpHost = requireEnv("SMTP_HOST");
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpUser = requireEnv("SMTP_USER");
    const smtpPass = requireEnv("SMTP_PASS");
    const toEmail = process.env.INTERNSHIPS_TO_EMAIL || smtpUser;
    const fromEmail =
      process.env.INTERNSHIPS_FROM_EMAIL || "no-reply@throoout.com";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification to HR
    // 3. Send confirmation email to applicant
    // For now, we'll just log the data

    const applicationData = {
      name,
      email,
      phone,
      coverLetter,
      internshipSlug,
      internshipTitle,
      resumePath: filePath,
      submittedAt: new Date().toISOString(),
    };

    // Send email with PDF attachment
    await transporter.sendMail({
      from: `Throoout Careers <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Internship Application: ${internshipTitle} — ${name}`,
      text:
        `New internship application received\n\n` +
        `Position: ${internshipTitle} (${internshipSlug})\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n\n` +
        `Cover Letter:\n${coverLetter}\n`,
      html: `
        <h2>New Internship Application</h2>
        <p><strong>Position:</strong> ${internshipTitle} (${internshipSlug})</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Cover Letter:</strong></p>
        <pre style="white-space:pre-wrap;font-family:ui-sans-serif,system-ui;">${coverLetter}</pre>
      `,
      attachments: [
        {
          filename: fileName,
          content: buffer,
          contentType: "application/pdf",
        },
      ],
    });

    // Save application data to JSON file (for demo purposes)
    const applicationsFile = path.join(uploadsDir, "applications.json");
    let applications = [];
    try {
      const { readFile } = await import("fs/promises");
      const existingData = await readFile(applicationsFile, "utf-8");
      applications = JSON.parse(existingData);
    } catch {
      // File doesn't exist yet, that's okay
    }

    applications.push({
      ...applicationData,
      resumeFileName: fileName,
    });

    await writeFile(applicationsFile, JSON.stringify(applications, null, 2));

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'careers@throoout.com',
    //   to: 'hr@throoout.com',
    //   subject: `New Internship Application: ${internshipTitle}`,
    //   html: `
    //     <h2>New Application Received</h2>
    //     <p><strong>Position:</strong> ${internshipTitle}</p>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Cover Letter:</strong></p>
    //     <p>${coverLetter}</p>
    //   `,
    //   attachments: [{ filename: fileName, path: filePath }]
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { error: "Failed to process application. Please try again." },
      { status: 500 },
    );
  }
}
