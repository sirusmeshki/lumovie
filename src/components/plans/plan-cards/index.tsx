"use client";

import { FC } from "react";

import Plan from "./plan";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

const PlanCards: FC = () => {
  const plans = [
    {
      title: "basic",
      price: 9.99,
      device: 1,
      quality: "HD",
    },
    {
      title: "standard",
      price: 15.49,
      device: 2,
      quality: "Full HD",
      isPrimary: true,
    },
    { title: "premium", price: 18.99, quality: "Ultra HD", device: 4 },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="z-10 flex flex-wrap items-center justify-center gap-7">
      {plans.map((plan, index) => {
        return (
          <Plan
            key={index}
            title={plan.title}
            price={plan.price}
            device={plan.device}
            quality={plan.quality}
            isPrimary={plan.isPrimary}
          />
        );
      })}
    </motion.div>
  );
};

export default PlanCards;
