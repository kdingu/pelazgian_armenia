import { Form, Link, useOutletContext } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { OutletContext } from "~/lib/types";
import Container from "~/components/container";
import React from "react";
import MobileHeader from "~/components/header/mobile";

type LngBtnProps = {
  children: React.ReactNode;
  locale: string;
  name: string;
  value: string;
};

function Header() {
  const { locale } = useOutletContext<OutletContext>();
  const { t } = useTranslation();

  return (
    <div className="sticky top-0 z-50">
      <Container className="!px-8 relative border-b bg-white flex justify-between items-center py-2">
        <div className="flex items-center justify-between gap-x-4">
          <Link to="/">
            <img
              src="/woa-logo.png"
              alt="logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </Link>

          <Form
            action="#"
            className="hidden md:flex items-center justify-between gap-x-1"
          >
            <LanguageButton name="lng" value="sq" locale={locale}>
              Shqip
            </LanguageButton>

            <LanguageButton name="lng" value="en" locale={locale}>
              English
            </LanguageButton>
          </Form>
        </div>

        <nav className="hidden md:flex gap-x-4 justify-between items-center">
          <NavLink to="/">{t("header.kreu")}</NavLink>
          <NavLink to="/author">{t("header.autori")}</NavLink>
          <NavLink to="/contact">{t("header.kontakt")}</NavLink>
        </nav>

        <div className="block md:hidden">
          <MobileHeader />
        </div>

        <div className="absolute top-0 left-0 w-[20px] h-full bg-gradient-to-b from-flag-red to-black" />
        <div className="absolute top-0 right-0 w-[20px] h-full bg-gradient-to-b from-flag-red via-flag-blue to-flag-orange" />
      </Container>
    </div>
  );
}

export default Header;

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
