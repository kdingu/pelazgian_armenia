import { Resend } from "resend";



const resend = new Resend(process.env.RESEND_API_KEY);
const senderName = process.env.EMAIL_SENDER_NAME;
const senderAddress = process.env.EMAIL_SENDER_ADDRESS;
const recipientAddress = process.env.EMAIL_RECIPIENT_ADDRESS;

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
      from: `${senderName} <${senderAddress}>`,
      to: [`${recipientAddress}`],
      subject: "Kërkesë kontakti nëpërmjet faqes ArmeniaPellazgjike.com",
      text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
      replyTo: email, // Allows you to reply directly to the sender
    });

    return response;
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email");
  }
}
