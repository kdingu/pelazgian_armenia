import React from "react";
import { Book } from "~/lib/types";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

type Props = {
  data: Book[];
};

function Listing({ data }: Props) {
  const { t } = useTranslation();

  if (!data || data.length === 0) return <></>;

  return (
    <div>
      <div className="mb-6">
        <label htmlFor="sort">
          <div className="mb-1">{t("sort_by")}:</div>
          <select name="sort" id="sort" defaultValue="year-desc" className="p-2">
            <option value="year-desc">Publication Year (Newest first)</option>
            <option value="year-asc">Publication Year (Oldest first)</option>
            <option value="title-asc">Title (A to Z)</option>
            <option value="title-desc">Title (Z to A)</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {data.map((book: Book) => {
          console.log("book", book);
          return (
            <Link key={book.id} to={`/book/${book.slug}`}>
              <article className="relative h-[300px] overflow-hidden group">
                <img
                  src={book.cover_url}
                  alt="book cover"
                  className="w-full h-full object-cover"
                />

                <div
                  className="opacity-0 group-hover:opacity-100 transition-all absolute bottom-0 left-0 w-full h-32 text-light-cream flex justify-center items-end pb-2 bg-gradient-to-t from-black">
                  {t("view_more")}
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Listing;
