import Layout from "~/components/layout";
import { Outlet, useOutletContext } from "@remix-run/react";
import Container from "~/components/container";

export default function Index() {
  const outlet = useOutletContext();

  return (
    <Layout>
      <Container className="bg-paper-white">
        <Outlet context={outlet} />
      </Container>
    </Layout>
  );
}
