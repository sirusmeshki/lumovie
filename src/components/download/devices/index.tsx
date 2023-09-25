import { FC } from "react";
import Image from "next/image";

import { DevicesProps } from "../models";

const Devices: FC<DevicesProps> = ({ tabs, activeTab }) => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3 px-2">
      {tabs.map(
        (tab) =>
          tab.name === activeTab &&
          tab.devices.map((device, index) => (
            <li
              className="flex items-center justify-center w-full h-24 gap-4 border border-solid rounded-sm cursor-pointer sm:w-56 border-stone-900"
              key={index}>
              <Image
                alt={`${device.name} logo`}
                src={device.logo}
                width={48}
                height={48}
                className="w-auto h-auto"
                priority
              />
              <div className="flex flex-col">
                <h6 className="text-xs font-light text-neutral-500">
                  {device.info}
                </h6>
                {tab.name !== "Game Consoles" && (
                  <h5 className="text-sm font-bold text-neutral-200">
                    {device.name}
                  </h5>
                )}
              </div>
            </li>
          ))
      )}
    </ul>
  );
};

export default Devices;
