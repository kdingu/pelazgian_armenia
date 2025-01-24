import { Form, Link, useOutletContext } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { OutletContext } from "~/lib/types";
import React, { useState } from "react";

type LngBtnProps = {
  children: React.ReactNode;
  locale: string;
  name: string;
  value: string;
};

function MobileHeader() {
  const { locale } = useOutletContext<OutletContext>();
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickNav = (event) => {
    if (event.target.tagName === "A") {
      setIsOpen(false)
    }
  }

  return (
    <div className="relative">
      {/* Menu Button */}
      <button onClick={toggleMenu}>{t("Menu")}</button>

      {/* Menu Items */}
      <div
        className={`bg-pastel-blue text-white top-0 left-0 w-svw h-svh fixed z-50 transition-all ${
          isOpen ? "translate-x-[0%]" : "translate-x-[110%]"
        }`}
      >
        <div className="relative">
          <button onClick={toggleMenu} className="absolute top-1 right-1 p-2">
            {t("close")}
          </button>

          <div className="pt-12 px-2">
            <span className="capitalize text-sm">{t("language")}:</span>
            <Form
              action="#"
              className="flex flex-col justify-center items-start"
            >
              <LanguageButton name="lng" value="sq" locale={locale}>
                Shqip
              </LanguageButton>

              <LanguageButton name="lng" value="en" locale={locale}>
                English
              </LanguageButton>
            </Form>

            <hr className="my-4" />

            <nav
              className="flex flex-col gap-x-4 justify-center items-start"
              onClick={handleClickNav}
            >
              <NavLink to="/">{t("header.kreu")}</NavLink>
              <NavLink to="/author">{t("header.autori")}</NavLink>
              <NavLink to="/contact">{t("header.kontakt")}</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;

function LanguageButton({ children, locale, name, value }: LngBtnProps) {
  return (
    <button
      type="submit"
      name={name}
      value={value}
      className={`${locale === value && "underline"} hover:underline`}
    >
      {children}
    </button>
  );
}

type NavLinkProps = {
  children: React.ReactNode;
  to: string;
};

function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link className="hover:underline" to={to}>
      {children}
    </Link>
  );
}
