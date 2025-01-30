"use client"
import React from "react";
import IndexController from "../../controller";
import Image from "next/image";
import Waves from '../../components/reactbitcomponent';
import SplashCursor from '../../components/SplashCursor'
const Page = async () => {
  const photos = await IndexController.Checkphotos();
  console.log("Fetched photos:", photos);

  return (
    <div className="relative min-h-screen bg-black"> {/* Black background */}
      {/* Waves component */}
      <Waves
        lineColor="#fff"
        backgroundColor="rgba(0, 0, 0, 0.2)" // Semi-transparent black
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="absolute top-0 left-0 w-full h-full" // Full height and width
      />
      <SplashCursor />
      {/* Gallery content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen"> {/* Center content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {photos.map((item: any, index: number) => (
            <div key={index} className="overflow-hidden border-2 border-white hover:border-blue-600 cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={item?.urls?.small}
                alt={item?.alt_description || "Image"}
                width={1920}
                height={1080}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;