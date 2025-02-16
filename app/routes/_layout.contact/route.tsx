import { Form, useActionData } from "@remix-run/react";
import { ActionFunction, json } from "@remix-run/node";
import { sendEmail } from "~/lib/utils/email";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "~/components/title";
import Input from "~/components/input";
import Textarea from "~/components/textarea";
import ButtonSubmit from "~/components/button-submit";
import { GrNext, GrPhone, GrWhatsapp } from "react-icons/gr";
import ContactLink from "~/components/contact-anchor";
import Subtitle from "~/components/subtitle";
import SectionTitle from "~/components/section-title";

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

function Route() {
  const { t } = useTranslation();

  const displayPhoneNumber = "+355 67 208 4679";
  const phoneNumber = displayPhoneNumber.replace(/\s/g, "");

  const displayWhatsappNumber = "+355 67 292 9929";
  const whatsappNumber = displayWhatsappNumber.replace(/\s/g, "");

  const actionData = useActionData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-10">
      <Title className="text-pastel-blue">{t("contact.title")}</Title>

      <hr className="my-6" />

      <div className="mb-10 text-center text-lg text-gray-700">
        <SectionTitle>
          <div className="text-3xl">{t("contact.contact_us")}</div>
        </SectionTitle>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          <ContactLink
            href={`tel:${phoneNumber}`}
            icon={GrPhone}
            text={displayPhoneNumber}
            color="blue"
          />

          <ContactLink
            href={`https://wa.me/${whatsappNumber}`}
            icon={GrWhatsapp}
            text={displayWhatsappNumber}
            color="green"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>

      <div className="text-center text-lg text-gray-700">
        <SectionTitle>
          <div className="text-3xl">{t("contact.or_by")}</div>
        </SectionTitle>

        <Form method="post" className="mx-auto space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Input
              type="text"
              name="name"
              placeholder={t("contact.full_name")}
              value={formData.name}
              onChange={handleInputChange}
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
              type="email"
              name="email"
              placeholder={t("contact.email")}
              value={formData.email}
              onChange={handleInputChange}
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Textarea
            name="message"
            placeholder={t("contact.message")}
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex flex-row justify-center">
            <ButtonSubmit className="group">
              <div className="flex items-center justify-center gap-x-2">
                <span>{t("contact.send_message")}</span>
                <GrNext className="transition-all group-hover:translate-x-2" />
              </div>
            </ButtonSubmit>
          </div>

          {actionData?.error && (
            <div className="text-2xl text-red-600 mt-4">{actionData.error}</div>
          )}
          {actionData?.success && (
            <div className="text-2xl text-green-600 mt-4">
              {actionData.success}
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Route;
