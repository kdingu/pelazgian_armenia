import { useTranslation } from "react-i18next";
import Container from "~/components/container";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="bg-soft-red text-center px-10 py-4 text-light-cream">
      <Container>
        <span>{t("footer.disclaimer")}</span>
      </Container>
    </div>
  );
}

export default Footer;
