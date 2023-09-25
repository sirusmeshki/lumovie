"use client";

import { easeInOut, motion } from "framer-motion";
import { FC } from "react";

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

const Title: FC = () => {
  const title = [
    { words: ["Unlimited", "films,", "series,", "anime", "and", "more."] },
  ];

  const container = {
    hidden: { y: 220 },
    show: {
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  const words = {
    hidden: { y: 220 },
    show: { y: 0, transition: transition },
  };

  return (
    <motion.h1 className="flex flex-col md:text-5xl xl:text-7xl transition-all xl:max-w-[1100px] items-center justify-center px-4 my-4 overflow-hidden text-4xl font-extrabold text-center max-w-[740px] text-white">
      {title.map((line, index) => {
        return (
          <motion.span
            key={index}
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-1"
          >
            {line.words.map((word, index) => {
              return (
                <motion.span key={index} variants={words}>
                  {word}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

// const title = "Unlimited films, series, anime and more.";
// const letters = title.split("");
export default Title;
