"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppAssets } from "../constants/assets";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

function Card() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    gsap.from(card1Ref.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: card1Ref.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Card 2 Animation
    gsap.from(card2Ref.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: card2Ref.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Card 3 Animation
    gsap.from(card3Ref.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: card3Ref.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div>
      <main className="container mx-auto p-4 overflow-hidden">
        <h2 className="text-2xl font-bold my-4 text-gray-800">
          Discover Incredible India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            ref={card1Ref}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="relative h-60 w-full">
              <Image
                src={AppAssets.Raj}
                layout="fill"
                objectFit="cover"
                alt="Rajasthan"
                className="rounded-t-md"
              />
            </div>
            <h3 className="text-lg font-bold mt-2 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Rajasthan
            </h3>
            <p className="text-gray-600">
              Experience the royal heritage and desert beauty.
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={card2Ref}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="relative h-60 w-full">
              <Image
                src={AppAssets.kerela}
                layout="fill"
                objectFit="cover"
                alt="Kerala"
                className="rounded-t-md"
              />
            </div>
            <h3 className="text-lg font-bold mt-2 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Kerala
            </h3>
            <p className="text-gray-600">
              God's own country with serene backwaters.
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={card3Ref}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="relative h-60 w-full">
              <Image
                src={AppAssets.Goa}
                layout="fill"
                objectFit="cover"
                alt="Goa"
                className="rounded-t-md"
              />
            </div>
            <h3 className="text-lg font-bold mt-2 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Goa
            </h3>
            <p className="text-gray-600">
              Relax on the sunny beaches and enjoy the nightlife.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Card;