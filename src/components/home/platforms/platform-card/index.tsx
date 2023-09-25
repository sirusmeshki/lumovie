import { FC } from "react";

import { Props } from "./models";

const PlatformCard: FC<Props> = ({ title, subTitle, icon }) => {
  return (
    <div className="border border-solid bg-linerBlur backdrop-blur-md rounded-[1.25rem] px-6 py-8 border-neutral-800 w-full">
      <header className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="text-base font-bold text-neutral-200">{title}</h4>
      </header>
      <p className="text-sm font-medium text-neutral-500">{subTitle}</p>
    </div>
  );
};

export default PlatformCard;
