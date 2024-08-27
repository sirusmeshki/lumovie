import { FC } from "react";
import Image from "next/image";

import { DevicesProps } from "../models";
import Link from "next/link";

const Devices: FC<DevicesProps> = ({ tabs, activeTab }) => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3 px-2">
      {tabs.map(
        (tab) =>
          tab.name === activeTab &&
          tab.devices.map((device, index) => (
            <li
              className="w-full h-24 flex justify-center items-center border border-solid rounded-sm cursor-pointer sm:w-56 border-neutral-900 hover:bg-neutral-950"
              key={index}>
              <a target="_blank" className="flex gap-4 items-center justify-center " href={device.href ? device.href : ''} >
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
              </a>
            </li>
          ))
      )}
    </ul>
  );
};

export default Devices;
