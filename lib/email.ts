import nodemailer from "nodemailer";

// Zoho SMTP. Created per call: Workers forbid the random bytes nodemailer
// generates at construction time outside a request handler.
export function createMailTransport() {
  return nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendEmail({
  to,
  subject,
  message,
  leadName,
}: {
  to: string;
  subject: string;
  message: string;
  leadName: string;
}) {
  try {
    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP credentials not configured. Skipping email send.");
      return { success: true, skipped: true };
    }

    const htmlMessage = message.replace(/\n/g, "<br />");

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
            <!-- Header with Logo -->
            <div style="padding: 30px 30px 0; text-align: left;">
              <img src="https://www.throughout.io/images/logo.png" alt="Throughout (PVT) LTD Logo" style="max-width: 140px; height: auto;" />
            </div>

            <!-- Content -->
            <div style="padding: 30px;">
              <h2 style="color: #063667; margin-top: 0; font-size: 20px;">Dear ${leadName},</h2>
              <div style="color: #374151; line-height: 1.6; font-size: 15px;">
                ${htmlMessage}
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #E5E7EB; padding: 20px 30px; text-align: center;">
              <p style="color: #063667; margin: 0; font-size: 13px;">
                Best regards,<br/>
                <strong style="color: #3599F9; font-size: 16px;">${process.env.MAIL_FROM || "Throughout (PVT) LTD Team"}</strong>
              </p>
              <p style="color: #6B7280; margin-top: 15px; font-size: 12px;">
                This is an automated message. Please do not reply to this email.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const fromName = process.env.MAIL_FROM || "Throughout (PVT) LTD";
    const fromEmail = process.env.SMTP_USER;

    const result = await createMailTransport().sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to,
      subject,
      html: htmlContent,
      text: message,
    });

    return {
      success: true,
      messageId: result.messageId,
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      error: String(error),
    };
  }
}
