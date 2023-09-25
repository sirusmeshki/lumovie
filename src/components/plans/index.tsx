import { FC } from "react";

import clsx from "clsx";

import Pattern from "./pattern";
import PlanCards from "./plan-cards";
import SectionHeader from "../section-header";

interface Props {
  forPage?: boolean;
  hasPattern: boolean;
}

const Plans: FC<Props> = ({ forPage, hasPattern }) => {
  return (
    <section
      className={clsx(
        forPage ? "my-10 lg:my-20" : "mt-60 md:mb-80",
        "relative flex flex-col items-center justify-center w-full gap-10 px-4"
      )}>
      <SectionHeader
        title="Choose Your Plan"
        subTitle="Switch plans or cancel anytime."
      />
      <div className="relative flex items-center justify-center">
        {hasPattern && <Pattern />}
        <PlanCards />
      </div>
    </section>
  );
};

export default Plans;
