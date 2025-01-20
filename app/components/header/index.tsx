import { Form, Link, useOutletContext } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { OutletContext } from "~/lib/types";
import Container from "~/components/container";
import React from "react";

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
    <div className="bg-soft-red">
      <Container className="flex justify-between items-center py-2 text-light-cream">
        <div className="flex items-center justify-between gap-x-4">
          <img
            src="/woa-logo.png"
            alt="logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <Form className="flex items-center justify-between gap-x-1">
            <LanguageButton name="lng" value="sq" locale={locale}>
              Shqip
            </LanguageButton>

            <div className="h-6 border border-light-cream" />

            <LanguageButton name="lng" value="en" locale={locale}>
              English
            </LanguageButton>
          </Form>
        </div>
        <nav className="flex gap-x-4 justify-between items-center">
          <NavLink to="/">
            {t("header.kreu")}
          </NavLink>
          <NavLink to="/rreth-nesh">
            {t("header.rreth_nesh")}
          </NavLink>
          <NavLink to="/kontakt">
            {t("header.kontakt")}
          </NavLink>
        </nav>
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
