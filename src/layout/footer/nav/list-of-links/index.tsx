import { FC } from "react";
import Link from "next/link";

import { Props } from "../models";

const ListOfLinks: FC<Props> = ({ list }) => {
  return (
    <>
      <ul className="flex flex-col gap-4">
        {list.map((link, index: number) => {
          return (
            <li
              key={index}
              className="text-xs font-light w-fit text-neutral-400 hover:text-neutral-200">
              <Link href={link.path}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListOfLinks;
