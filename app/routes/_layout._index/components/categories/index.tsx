import { Link, useOutletContext } from "@remix-run/react";
import { Category, OutletContext } from "~/lib/types";
import SectionTitle from "~/components/section-title";
import { useTranslation } from "react-i18next";
import Button from "~/components/button";
import { GrNext } from "react-icons/gr";

function Categories() {
  const { categories } = useOutletContext<OutletContext>();
  const { t } = useTranslation();

  return (
    <section>
      <SectionTitle>{t("kategorite")}</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {categories.map((ctg: Category) => {
          return (
            <Link
              key={ctg.id}
              to={`/books?category=${ctg.id}`}
              className="w-full"
            >
              <Button className="group w-full">
                <div className="flex items-center justify-center gap-x-2">
                  <span>{t(`be.${ctg.name.toLowerCase()}`)}</span>
                  <GrNext className="transition-all group-hover:translate-x-2" />
                </div>
              </Button>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
