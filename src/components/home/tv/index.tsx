"use client";

import React, { FC, useRef, useEffect } from "react";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TV: FC = () => {
  const videoRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top center",
        scrub: true,
      },
      scale: 0.8,
      translateY: "5rem",
      ease: Power3.easeOut,
      border: "10px solid #181818",
    });

    gsap.to(backdropRef.current, {
      scrollTrigger: {
        trigger: backdropRef.current,
        start: "top center",
        scrub: true,
      },
      scaleX: 1,
      scaleY: 0.8,
      translateY: "7rem",
    });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center w-screen mt-16 aspect-21/9">
      <video
        src={"/assets/video/video.mp4"}
        className="object-cover w-screen aspect-[2.4/1]"
        autoPlay
        loop
        muted
        ref={videoRef}
      />
      <video
        src={"/assets/video/backdrop.mp4"}
        className="absolute object-cover w-screen scale-125 aspect-[2.4/1] -z-10 blur-[70px]"
        autoPlay
        loop
        muted
        ref={backdropRef}
      />
    </section>
  );
};

export default TV;
