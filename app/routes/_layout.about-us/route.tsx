import { useTranslation } from "react-i18next";
import Title from "~/components/title";

function Route() {
  const { t } = useTranslation();

  return (
    <div className="py-10">
      <Title>{t("about_us.title")}</Title>
    </div>
  );
}

export default Route;
