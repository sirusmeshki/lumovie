"use client";

import { FC } from "react";
import { PlanProps } from "../models";

import Header from "./header";
import Price from "./price";
import Cons from "./cons";
import Button from "@/components/button";
import { motion } from "framer-motion";

const transition = { duration: 0.4, ease: [0.75, 0.34, 0.3, 0.74] };

const plan = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { ease: "linear" } },
};

const Plan: FC<PlanProps> = ({ title, price, device, quality, isPrimary }) => {
  return (
    <motion.div
      variants={plan}
      className={`${
        isPrimary
          ? "bg-primary"
          : "bg-background border border-solid border-neutral-900"
      } px-6 pt-8 pb-6 flex flex-col gap-8 justify-center items-center rounded-md hover:scale-105 hover:border-neutral-600 transition-all`}
    >
      {isPrimary && (
        <h6 className="text-sm font-black text-neutral-950">MOST POPULAR</h6>
      )}

      <Header isPrimary={isPrimary} title={title} />
      <Price isPrimary={isPrimary} price={price} />
      <Cons isPrimary={isPrimary} device={device} quality={quality} />

      {isPrimary ? (
        <Button className="w-full bg-background text-primary" text="Select" />
      ) : (
        <Button className="w-full" text="Select" />
      )}
    </motion.div>
  );
};

export default Plan;
