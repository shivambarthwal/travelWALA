"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { AppAssets } from "../app/constants/assets";


gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
   
    gsap.from(bannerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
    });

    // Text animation
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    ScrollTrigger.create({
      trigger: bannerRef.current,
      start: "top top",
      end: "bottom top",
      onEnter: () => {
        gsap.to(bannerRef.current, {
          scale: 1.05,
          duration: 2,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(bannerRef.current, {
          scale: 1,
          duration: 2,
          ease: "power2.out",
        });
      },
    });
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative bg-cover bg-center h-[90vh] bg-banner overflow-hidden"
      style={{
        backgroundImage: `url(${AppAssets.Banner})`, // Replace with your banner image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 text-center text-white p-8 flex flex-col justify-center items-center h-full"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Travel Wale
        </h1>
        <p className="text-lg md:text-xl mt-2">
          Explore amazing destinations with us
        </p>
        <button
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
          onClick={() => {
            // Add your button action here
            console.log("Explore button clicked!");
          }}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner;