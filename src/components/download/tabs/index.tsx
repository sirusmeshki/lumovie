import clsx from "clsx";

import { FC } from "react";

import { TabsProps } from "../models";

const Tabs: FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="w-full my-10 border-solid bg-neutral-950 border-y border-stone-800">
      <ul className="grid max-w-xl grid-cols-2 grid-rows-1 mx-auto sm:grid-rows-1 sm:grid-cols-3 justify-stretch">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(tab.name)}
            className={clsx(
              tab.name === "Desktop" ? "border-none" : "",
              activeTab === tab.name
                ? "bg-neutral-900 text-neutral-100 font-bold"
                : "text-neutral-500 font-semibold grayscale",
              "flex text-sm sm:text-md flex-col items-center w-full justify-center h-full border-x border-solid border-stone-800 gap-2 cursor-pointer aspect-video"
            )}>
            {tab.logo}
            {tab.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
