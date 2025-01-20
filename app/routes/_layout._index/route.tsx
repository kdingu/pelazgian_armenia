import Container from "~/components/container";
import Title from "~/components/title";
import Subtitle from "~/components/subtitle";
import { useTranslation } from "react-i18next";
import Categories from "~/routes/_layout._index/components/categories";
import LatestBooks from "~/routes/_layout._index/components/latest-books";

export default function Index() {
  const { t } = useTranslation();

  return (
    <Container className="py-10">
      <Title className="text-dark-blue">{t("home.title")}</Title>
      <Subtitle>{t("home.subtitle")}</Subtitle>

      <hr className="border-dark-blue border-b-2 my-10" />

      <div
        className="text-justify"
        dangerouslySetInnerHTML={{ __html: t("home.body") }}
      />

      <hr className="border-dark-blue border-b-2 my-10" />

      <Categories />

      <hr className="border-dark-blue border-b-2 my-10" />

      <LatestBooks />
    </Container>
  );
}
