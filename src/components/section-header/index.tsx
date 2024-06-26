import React, { FC } from "react";

import { Props } from "./models";

const SectionHeader: FC<Props> = ({ title, subTitle }) => {
  return (
    <header className="z-10 flex flex-col items-center gap-1 mx-4 text-center md:gap-2">
      <h3 className="text-2xl font-bold lg:text-3xl text-neutral-100">
        {title}
      </h3>
      <p className="max-w-lg text-xs font-normal leading-4 sm:text-base text-neutral-400">
        {subTitle}
      </p>
    </header>
  );
};

export default SectionHeader;
