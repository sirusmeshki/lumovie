import { FC } from "react";

import Logo from "@/components/logo";
import Nav from "./nav";
import RegisterButtons from "./register-buttons";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-4 border-b border-solid sm:py-6 border-neutral-900 bg-blur backdrop-blur-3xl">
      <section className="flex [&>*:nth-child(2)]:hidden sm:[&>*:nth-child(2)]:flex items-center justify-between gap-4 px-4 mx-auto max-w-limit">
        <Logo />
        <Nav />
        <RegisterButtons />
      </section>
      <div className="px-4 mt-4 sm:hidden">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
