import { Book } from "~/lib/types";
import SectionTitle from "~/components/section-title";
import { useTranslation } from "react-i18next";
import { GrNext } from "react-icons/gr";
import { Link } from "@remix-run/react";
import BookTile from "~/components/book";

type Props = {
  data: Book[];
};

function HighlightedBooks({ data }: Props) {
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex flex-col mb-10 sm:mb-0 sm:flex-row justify-between">
        <SectionTitle>{t("highlighted_books")}</SectionTitle>

        <Link to="/books" className="group hover:underline h-max w-max">
          <div className="flex items-center justify-center gap-x-2">
            <span>{t("libraria")}</span>
            <GrNext className="transition-all group-hover:translate-x-2" />
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {data.map((book: Book) => {
          return (
            <Link
              key={book.id}
              to={`/books/${book.slug}`}
              className="w-max m-auto"
            >
              <BookTile data={book} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default HighlightedBooks;
