import { useTranslation } from "react-i18next";
import Title from "~/components/title";

function Route() {
  const { t } = useTranslation();

  return (
    <div className="py-10">
      <Title className="text-pastel-blue">{t("contact.title")}</Title>
    </div>
  );
}

export default Route;
