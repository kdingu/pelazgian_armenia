import { useTranslation } from "react-i18next";
import Container from "~/components/container";
import React from "react";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      {/*<Container className="!px-0">*/}
      {/*  <div className="w-full h-4 bg-gradient-to-r from-flag-red via-flag-blue to-flag-orange" />*/}
      {/*</Container>*/}
      <Container className="bg-soft-red text-center px-10 py-6 text-light-cream">
        <span>{t("footer.disclaimer")}</span>
      </Container>
    </>
  );
}

export default Footer;
