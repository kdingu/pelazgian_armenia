import { Form, useOutletContext } from "@remix-run/react";

function Header() {
  const { locale } = useOutletContext();

  return (
    <div className="bg-soft-red">
      <div>
        <img
          src="/woa-logo.png"
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <Form>
          <button
            type="submit"
            name="lng"
            value="sq"
            className={`${locale === "sq" && "text-white"}`}
          >
            Shqip
          </button>
          <button
            type="submit"
            name="lng"
            value="en"
            className={`${locale === "en" && "text-white"}`}
          >
            English
          </button>
        </Form>
      </div>
      <nav>nav</nav>
    </div>
  );
}

export default Header;
