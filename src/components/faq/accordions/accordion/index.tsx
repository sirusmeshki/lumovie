"use client";

import { FC, useState } from "react";
import { AccordionProps } from "../models";

import { clsx } from "clsx";

import IC_Arrow from "@/assets/icon/IC_Arrow";

const Accordion: FC<AccordionProps> = ({ question, answer }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

  return (
    <li
      className="px-1 border-b border-solid cursor-pointer sm:px-7 border-neutral-800"
      onClick={() => setIsAccordionOpen((prev) => !prev)}>
      <header className="flex items-center justify-between gap-1 pt-4 pb-3">
        <h5 className="text-base font-medium text-neutral-200">{question}</h5>
        <IC_Arrow
          className={`${
            isAccordionOpen ? "rotate-180" : ""
          } transition-all shrink-0`}
        />
      </header>
      <div
        className={clsx(
          isAccordionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          "grid transition-all pb-4"
        )}>
        <p className="overflow-hidden text-xs font-normal leading-5 sm:text-sm text-neutral-400">
          {answer}
        </p>
      </div>
    </li>
  );
};

export default Accordion;
