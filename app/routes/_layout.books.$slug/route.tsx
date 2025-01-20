import { useTranslation } from "react-i18next";
import Title from "~/components/title";
import { Link } from "@remix-run/react";

function Route() {
  const {t} = useTranslation();

  return (
    <div className="py-10">
      <Title>{t("single_book.title")}</Title>

      <Link to="/books">Back</Link>
    </div>
  );
}

export default Route;
