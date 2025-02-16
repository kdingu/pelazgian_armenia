import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const response = await resend.emails.send({
      from: `Your Name <contact@yourdomain.com>`, // Use the verified domain
      to: ["your-email@example.com"], // Your email address to receive messages
      subject: "New Contact Form Submission",
      text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
      replyTo: email, // Allows you to reply directly to the sender
    });

    return response;
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email");
  }
}
