import { Book } from "~/lib/types";
import SectionTitle from "~/components/section-title";
import { useTranslation } from "react-i18next";
import Button from "~/components/button";
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
      <div className="flex justify-between">
        <SectionTitle>{t("highlighted_books")}</SectionTitle>

        <Link to="/books" className="group hover:underline h-max w-max">
          <div className="flex items-center justify-center gap-x-2">
            <span>{t("libraria")}</span>
            <GrNext className="transition-all group-hover:translate-x-2" />
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {data.map((book: Book) => {
          return (
            <Link key={book.id} to={`/books/${book.slug}`}>
              <BookTile data={book} />
            </Link>
          );
        })}
        {data.map((book: Book) => {
          return (
            <Link key={book.id} to={`/books/${book.slug}`}>
              <BookTile data={book} />
            </Link>
          );
        })}
        {data.map((book: Book) => {
          return (
            <Link key={book.id} to={`/books/${book.slug}`}>
              <BookTile data={book} />
            </Link>
          );
        })}
        {data.map((book: Book) => {
          return (
            <Link key={book.id} to={`/books/${book.slug}`}>
              <BookTile data={book} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default HighlightedBooks;
