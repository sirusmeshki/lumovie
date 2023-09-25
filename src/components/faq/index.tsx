import { FC } from "react";

import clsx from "clsx";

import SectionHeader from "../section-header";
import Accordions from "./accordions";

interface Props {
  forPage?: boolean;
}
const FAQ: FC<Props> = ({ forPage }) => {
  return (
    <section
      className={clsx(
        "px-4 mx-auto  max-w-[1100px]",
        forPage ? "my-10 lg:my-20" : "mt-14 md:mt-40 mb-10"
      )}>
      <SectionHeader
        title="Frequently Asked Questions"
        subTitle="Common questions of other users may have occurred to you"
      />
      <Accordions />
    </section>
  );
};

export default FAQ;
