import { useTranslation } from "react-i18next";
import Container from "~/components/container";
import React from "react";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Container className="!px-0">
        <div className="w-full h-2 bg-gradient-to-r from-flag-red via-flag-blue to-flag-orange" />
      </Container>
      <Container className="bg-pastel-blue text-center px-10 py-2 text-light-cream">
        <span>{t("footer.disclaimer")}</span>
      </Container>
    </>
  );
}

export default Footer;
