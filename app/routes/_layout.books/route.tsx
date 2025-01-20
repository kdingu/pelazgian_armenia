import React from "react";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Backend } from "~/lib/services/backend/backend.server";
import { useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import Title from "~/components/title";

export const loader = async ({request}: LoaderFunctionArgs) => {
  const books = await Backend.getBooks();

  return {
    books
  };
};

function Route() {
  const { books } = useLoaderData<typeof loader>();
  const {t} = useTranslation();

  return (
    <div className="py-10">
      <Title>{t("books.title")}</Title>
    </div>
  );
}

export default Route;
