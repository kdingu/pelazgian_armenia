import { LoaderFunctionArgs, json } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useRouteLoaderData,
} from "@remix-run/react";
import i18nServer, { localeCookie } from "./modules/i18n.server";
import { useChangeLanguage } from "remix-i18next/react";

import "./tailwind.css";
import { Backend } from "~/lib/services/backend/backend.server";

export const handle = { i18n: ["translation"] };

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await i18nServer.getLocale(request);
  const categories = await Backend.getCategories();

  return json(
    { locale, categories },
    { headers: { "Set-Cookie": await localeCookie.serialize(locale) } }
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useRouteLoaderData<typeof loader>("root");

  const location = useLocation();
  const canonicalUrl = `https://armeniapellazgjike.com${location.pathname}`;

  return (
    <html lang={loaderData?.locale ?? "en"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Koleksioni i përkthimeve dhe studimeve letrate të autorit Berzh Piranjani për urën lidhëse ndërmjet gjuhës dhe kulturës shqipe dhe armene."
        />
        <meta
          name="keywords"
          content="Shqipëri, Armeni, shqip, armenisht, përkthime, letërsi, literaturë, histori, fjalor, poezi, Berzh, Piranjani, pellazg"
        />
        <meta name="author" content="Kevin Piranjani" />
        <meta name="robots" content="index, follow" />
        <Meta />
        <Links />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <title>Armenia Pellazgjike</title>
      </head>
      <body>
        <main className="relative">{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { locale, categories } = useLoaderData<typeof loader>();
  useChangeLanguage(locale);
  return <Outlet context={{ locale, categories }} />;
}
