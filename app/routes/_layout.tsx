import Layout from "~/components/layout";
import { Outlet, useOutletContext } from "@remix-run/react";

export default function Index() {
  const outlet = useOutletContext();

  return (
    <Layout>
      <Outlet context={outlet} />
    </Layout>
  );
}
