import React, { useRef } from "react";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Backend } from "~/lib/services/backend/backend.server";
import {
  Form,
  Link,
  Outlet,
  useFetcher,
  useLoaderData,
  useOutletContext,
  useRouteError,
  useSearchParams,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import Title from "~/components/title";
import { Book, Category } from "~/lib/types";
import BookTile from "~/components/book";
import i18nServer from "~/modules/i18n.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = new URLSearchParams(url.search);

  const locale = await i18nServer.getLocale(request);
  const books = await Backend.getBooks(query.get("category"), locale);
  const categories = await Backend.getCategories();

  return {
    books: books as Book[],
    categories: categories as Category[],
  };
};

function Route() {
  const [query] = useSearchParams();

  const { books, categories } = useLoaderData<typeof loader>();
  const { t } = useTranslation();
  const outlet = useOutletContext();

  const formRef = useRef();
  const buttonSubmitRef = useRef();

  const submitForm = () => {
    buttonSubmitRef.current.click();
  };

  return (
    <div className="py-10">
      <Title>{t("books.title")}</Title>

      <hr />

      <Outlet context={outlet} />

      <div className="flex justify-between items-center mb-4 mt-10">
        <Form ref={formRef} onChange={submitForm}>
          <label>
            <div className="mb-1">{t("books.filter_by_category")}</div>
            <select
              name="category"
              id="category"
              className="border px-4 py-2 !w-52"
              defaultValue={query.get("category")}
            >
              <option value="">All</option>
              {categories.map((ctg) => {
                return (
                  <option key={ctg.slug} value={ctg.id}>
                    {ctg.name}
                  </option>
                );
              })}
            </select>
          </label>

          <button className="hidden" ref={buttonSubmitRef} type="submit">
            Go
          </button>
        </Form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {books.map((book: Book) => {
          return (
            <Link
              key={book.id}
              to={`/books/${book.slug}`}
              className="m-auto sm:m-0 sm:w-full"
            >
              <BookTile data={book} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Route;

export const ErrorBoundary = () => {
  const error = useRouteError();

  return <div>Error: {error.toString()}</div>;
};
