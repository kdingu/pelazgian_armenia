import React from "react";
import Header from "~/components/header";
import Footer from "~/components/footer";

interface Props {
  children?: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
