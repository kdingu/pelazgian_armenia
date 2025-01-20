import { Form, Link, useOutletContext } from "@remix-run/react";
import { useTranslation } from "react-i18next";

function Header() {
  const { locale } = useOutletContext();
  const { t } = useTranslation();

  return (
    <div className="bg-soft-red flex justify-between items-center px-6 py-2">
      <div className="flex items-center justify-between gap-x-10">
        <img
          src="/woa-logo.png"
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <Form className="flex items-center justify-between gap-x-4">
          <button
            type="submit"
            name="lng"
            value="sq"
            className={`${locale === "sq" && "underline"} hover:underline`}
          >
            Shqip
          </button>
          <div className="h-6 border border-light-cream" />
          <button
            type="submit"
            name="lng"
            value="en"
            className={`${locale === "en" && "text-white"} hover:underline`}
          >
            English
          </button>
        </Form>
      </div>
      <nav className="flex gap-x-4 justify-between items-center">
        <Link className="hover:underline" to="/">{t("kreu")}</Link>
        <Link className="hover:underline" to="/rreth-nesh">{t("rreth_nesh")}</Link>
        <Link className="hover:underline" to="/kontakt">{t("kontakt")}</Link>
      </nav>
    </div>
  );
}

export default Header;
