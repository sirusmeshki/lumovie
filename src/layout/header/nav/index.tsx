import Link from "next/link";
import { FC } from "react";

const Nav: FC = () => {
  const links = ["pricing", "download", "faq"];

  return (
    <nav className="flex justify-between gap-4 max-w-96 sm:w-96">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            className="text-xs font-medium text-white capitalize md:text-sm xl:text-base last:uppercase"
            href={`/${link}`}>
            {link}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
