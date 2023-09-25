"use client";

import React, { FC, useRef } from "react";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Pattern: FC = () => {
  const patternRef = useRef(null);
  const lines =
    "absolute border-2 border-neutral-800 transition-all border-solid rounded-full aspect-square";

  return (
    <div
      id="pattern"
      className="absolute xl:w-[900px] sm:w-[800px] w-[500px]  opacity-60 transition-opacity"
      ref={patternRef}
    >
      <div className="relative flex items-center justify-center aspect-square">
        <span className={`${lines} w-full animate-lineShadow_lg `}></span>
        <span className={`${lines} w-3/4 animate-lineShadow_md`}></span>
        <span className={`${lines} w-3/6 animate-lineShadow_sm`}></span>
      </div>
    </div>
  );
};

export default Pattern;
