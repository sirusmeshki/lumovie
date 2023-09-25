"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Loading = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".CARD", {
        y: 0,
      });
      gsap.to(".CARD_2", {
        y: 0,
        delay: 0.5,
      });
      gsap.to(".CARD", {
        delay: 1,
        opacity: 0,
      });
      gsap.to(".CARD_2", {
        delay: 2,
        opacity: 0,
      });
      gsap.to(container.current, {
        delay: 2,
        display: "none",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container}>
      <div className="fixed w-full h-screen">
        <div className="absolute z-40 w-full h-screen -translate-y-full bg-neutral-950 CARD" />
        <div className="absolute z-50 w-full h-screen -translate-y-full bg-black CARD_2" />
      </div>
    </section>
  );
};

export default Loading;
