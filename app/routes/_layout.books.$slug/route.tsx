import { LoaderFunctionArgs } from "@remix-run/node";
import { Backend } from "~/lib/services/backend/backend.server";
import { useLoaderData, useNavigate } from "@remix-run/react";
import i18nServer from "~/modules/i18n.server";
import { Book } from "~/lib/types";
import { useEffect, useRef } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import Subtitle from "~/components/subtitle";
import Pill from "~/components/pill";
import { FaBarcode, FaLanguage, FaRegCalendarDays } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import Button from "~/components/button";
import { useTranslation } from "react-i18next";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const locale = await i18nServer.getLocale(request);
  const book = await Backend.getBookBySlug(String(params.slug), locale);

  return {
    book: book as Book,
  };
};

function Route() {
  const nav = useNavigate();
  const {t} = useTranslation();

  const { book } = useLoaderData<typeof loader>();
  console.log(book);

  const popupBgRef = useRef();

  const handleGoBack = (event, bypassEvent) => {
    if (bypassEvent || (event.target === popupBgRef.current)) {
      nav(-1);
    }
  };

  useEffect(() => {
    disableBodyScroll(document.body);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div
      ref={popupBgRef}
      data-popup-toggler={true}
      onClick={handleGoBack}
      className={`backdrop-blur-sm fixed flex justify-center items-center top-0 left-0 w-full h-full min-w-screen min-h-screen bg-black/50 z-50`}
    >
      <div className="relative cursor-auto p-10 w-full h-max max-h-screen max-w-5xl m-x-auto bg-paper-white rounded-lg shadow-2xl">
        <MdOutlineCancel
          onClick={() => handleGoBack(null, true)}
          className="absolute top-1 left-1 text-flag-red md:top-0 md:left-0 md:-translate-y-[120%] md:text-white"
          size={32}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <img src={book.cover_url} alt="book cover" className="hidden md:block md:col-span-4" />
          <div className="md:col-span-8 flex justify-between flex-col">
            <div>
              <div className="flex flex-wrap items-center sm:justify-start sm:items-center gap-2 mb-4">
                <Pill title="ISBN">
                  <div className="flex gap-2 justify-center items-center">
                    <FaBarcode className="inline-block" />
                    <span className="font-bold">{book.isbn}</span>
                  </div>
                </Pill>
                <Pill title={t("language")}>
                  <div className="flex gap-2 justify-center items-center">
                    <FaLanguage className="inline-block" />
                    {book.language}
                  </div>
                </Pill>
                <Pill title={t("year")}>
                  <div className="flex gap-2 justify-center items-center">
                    <FaRegCalendarDays className="inline-block" />
                    {book.publish_year}
                  </div>
                </Pill>
              </div>
              <Subtitle className="!text-black text-2xl">{book.title}</Subtitle>
              <Subtitle className="!text-black font-normal !text-sm">
                {book.subtitle}
              </Subtitle>
              <p className="text-justify overflow-y-scroll max-h-[200px] sm:max-h-auto">{book.description}</p>
              <hr />
              <p className="text-sm">{book.publishing}</p>
            </div>

            <div className="grid grid-cols-12 gap-2">
              <Button className="col-span-12 md:col-span-4">{t("download")}</Button>
              <Button className="col-span-12 md:col-span-4">{t("open")}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Route;
