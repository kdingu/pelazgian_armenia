// import { useTranslation } from "react-i18next";
// import Title from "~/components/title";

// function Route() {
//   const { t } = useTranslation();

//   return (
//     <div className="py-10">
//       <Title className="text-pastel-blue">{t("contact.title")}</Title>
//     </div>
//   );
// }

// export default Route;

import { Form, useActionData } from "@remix-run/react";
import { ActionFunction, json } from "@remix-run/node";
import { sendEmail } from "~/lib/utils/email";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();

  if (!name || !email || !message) {
    return json({ error: "All fields are required." }, { status: 400 });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    await sendEmail({ name, email, message });
    return json({ success: "Message sent successfully!" });
  } catch (error) {
    return json(
      { error: "Failed to send email. Try again later." },
      { status: 500 }
    );
  }
};

export default function ContactForm() {
  const actionData = useActionData();

  return (
    <Form method="post">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
      {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
      {actionData?.success && (
        <p style={{ color: "green" }}>{actionData.success}</p>
      )}
    </Form>
  );
}
