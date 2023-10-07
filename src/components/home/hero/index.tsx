"use client";

import Button from "@/components/button";
import { FC } from "react";

import Link from "next/link";
import Title from "./title";

import { motion } from "framer-motion";

const transition = { delay: 0.1, duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };
const transitionP = {
  delay: 2,
  duration: 0.3,
  ease: [0.6, 0.01, -0.05, 0.9],
};
const transitionButton = {
  delay: 2.5,
  duration: 0.3,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const image = {
  hidden: { y: 100, scale: 0.8, delay: 2 },
  show: { y: 0, scale: 1.3, transition: transition },
};

const Hero: FC = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 my-5 sm:my-7 md:my-8 xl:my-10">
      <div className="mx-auto overflow-hidden text-center">
        <Title />
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0, transition: transitionP }}
          className="text-sm font-medium md:text-base text-neutral-400">
          Watch anywhere. Cancel at any time.
        </motion.p>
      </div>
      <motion.div className="flex overflow-hidden">
        <motion.span
          initial={{ y: 50 }}
          animate={{ y: 0, transition: transitionButton }}>
          <Link href="/signup">
            <Button text="Sign Up" isCta />
          </Link>
        </motion.span>
      </motion.div>

      <motion.div
        className="w-full h-48 overflow-hidden sm:h-full"
        initial="hidden"
        animate="show">
        <motion.img
          src="/assets/image/background.png"
          alt="main background"
          variants={image}
          width={1920}
          height={490}
          className="object-cover w-full h-full aspect-16/9"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
