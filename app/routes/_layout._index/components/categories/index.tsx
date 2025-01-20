import React from "react";
import { Link, useOutletContext } from "@remix-run/react";
import { Category, OutletContext } from "~/lib/types";
import SectionTitle from "~/components/section-title";
import { useTranslation } from "react-i18next";

function Categories(props) {
  const { categories } = useOutletContext<OutletContext>();
  const {t} = useTranslation()

  return (
    <section>
      <SectionTitle>{t("kategorite")}</SectionTitle>

      <div className="grid grid-cols-4 gap-10">
        {categories.map((ctg: Category) => {
          return (
            <Link
              key={ctg.id}
              to={`/books?category=${ctg.slug}`}
              className="h-full w-full flex  justify-center items-center bg-white p-2 text-center"
            >
              {t(`be.${ctg.name.toLowerCase()}`)}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
