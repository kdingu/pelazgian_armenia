import Container from "~/components/container";
import Title from "~/components/title";
import Subtitle from "~/components/subtitle";
import { useTranslation } from "react-i18next";
import Categories from "~/routes/_layout._index/components/categories";
import HighlightedBooks from "~/routes/_layout._index/components/highlighted-books";
import { Backend } from "~/lib/services/backend/backend.server";
import { Link, useLoaderData } from "@remix-run/react";
import Button from "~/components/button";
import { GrNext } from "react-icons/gr";

export const loader = async () => {
  const highlightedBooks = await Backend.getHighlightedBooks();

  return {
    highlightedBooks,
  };
};

export default function Index() {
  const { highlightedBooks } = useLoaderData<typeof loader>();
  const { t } = useTranslation();

  return (
    <div className="py-10">
      <Title className="text-pastel-blue">{t("home.title")}</Title>
      <Subtitle>{t("home.subtitle")}</Subtitle>

      <hr className="my-6" />

      <div
        className="text-justify"
        dangerouslySetInnerHTML={{ __html: t("home.body") }}
      />

      <Link to="/books" className="w-full">
        <Button className="w-full group">
          <div className="flex items-center justify-center gap-x-2">
            <span>{t("libraria")}</span>
            <GrNext className="transition-all group-hover:translate-x-2" />
          </div>
        </Button>
      </Link>

      <hr className="my-6" />

      <Categories />

      <hr className="my-6" />

      <HighlightedBooks data={highlightedBooks} />
    </div>
  );
}
