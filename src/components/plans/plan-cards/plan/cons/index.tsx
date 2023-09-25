import { FC } from "react";
import { PlanProps } from "../../models";

import IC_Tik from "@/assets/icon/IC_Tik";

const Cons: FC<PlanProps> = ({ isPrimary, device, quality }) => {
  const cons = [
    `Watch on ${device} supported device at a time`,
    `Unlimited movies, TV shows`,
    `Watch in ${quality}`,
    `Ad-free TV shows and movies`,
  ];

  return (
    <ul className="flex flex-col gap-3 text-sm font-normal">
      {cons.map((con, index) => {
        return (
          <li
            className={`${
              isPrimary ? "text-neutral-900" : "text-neutral-200"
            } flex items-center gap-3`}
            key={index}>
            <div className="min-w-[18px]">
              <IC_Tik className={isPrimary ? "stroke-black" : ""} />
            </div>
            {con}
          </li>
        );
      })}
    </ul>
  );
};

export default Cons;
