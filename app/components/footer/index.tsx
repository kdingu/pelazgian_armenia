import { useTranslation } from "react-i18next";
import Container from "~/components/container";

function Footer() {
  const { t } = useTranslation();

  return (
    <Container className="bg-soft-red text-center px-10 py-6 text-light-cream text-sm">
      <span>{t("footer.disclaimer")}</span>
    </Container>
  );
}

export default Footer;
