import { FC } from "react";
import Nav from "./nav";

const Footer: FC = () => {
  return (
    <footer className="py-10 w-full z-[100] bg-background border-t-[1px] border-solid border-neutral-900">
      <section className="flex flex-col justify-start gap-6 px-4 mx-auto max-w-limit">
        <a
          className="font-normal font-base text-neutral-400"
          href="tel:1-844-505-2993"
        >
          Questions? Call 1-844-505-2993
        </a>
        <Nav />
      </section>
    </footer>
  );
};

export default Footer;
