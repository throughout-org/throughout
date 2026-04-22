import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const fromName = process.env.MAIL_FROM || "Throughout (PVT) LTD";
    const fromEmail = process.env.SMTP_USER;
    const toEmail = process.env.SMTP_USER; // receives contact form submissions

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9fafb;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="padding: 30px 30px 0; text-align: left;">
              <img src="https://www.throughout.io/images/logo.png" alt="Throughout (PVT) LTD Logo" style="max-width: 140px; height: auto;" />
            </div>
            <div style="padding: 30px;">
              <h2 style="color: #063667; margin-top: 0; font-size: 20px;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #374151;">
                <tr><td style="padding: 8px 0; font-weight: bold; width: 100px;">Name:</td><td>${name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
                ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>` : ""}
              </table>
              <div style="margin-top: 20px;">
                <p style="font-weight: bold; color: #063667; margin-bottom: 8px;">Message:</p>
                <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="background-color: #E5E7EB; padding: 20px 30px; text-align: center;">
              <strong style="color: #3599F9; font-size: 16px;">${fromName}</strong>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: htmlContent,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 },
    );
  }
}
