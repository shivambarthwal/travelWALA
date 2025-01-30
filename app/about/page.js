"use client";
import Image from "next/image";
import React from "react";
import { AppAssets } from "../../constants/assets";
import { useRouter } from "next/navigation";
import Ballpit from "../../components/Ballpit";

function AboutUsPage() {
  const router = useRouter();
  const HandleAdventure = () => {
    router.push("/blog");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 relative">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
              About Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Welcome to{" "}
              <span className="font-semibold text-blue-600">Travel Wale</span>,
              your ultimate guide to exploring the world. We are passionate
              about travel and dedicated to helping you discover the most
              amazing destinations, hidden gems, and unforgettable experiences.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                At Travel Wanderlust, our mission is to inspire and empower
                travelers to explore the world responsibly and sustainably.
              </p>
              <p className="text-gray-600">
                Whether you're a solo adventurer, a family on vacation, or a
                couple seeking a romantic getaway, we provide the tools, tips,
                and inspiration to make your journey unforgettable.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src={AppAssets.mission}
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Meet Our Team
            </h2>
            <div className="flex justify-center items-center w-96 border hover:border-black rounded-md mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Image
                  src={AppAssets.profile}
                  alt="Shivam barthwal"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Shivam Barthwal
                </h3>
                <p className="text-gray-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  Shivam is a seasoned traveler with over 10 years of experience
                  exploring the world. He founded Travel Wanderlust to share his
                  passion and knowledge with fellow travelers.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Explore the World?
            </h2>
            <p className="text-white mb-6">
              Join us on this incredible journey and discover the best travel
              tips, destinations, and experiences.
            </p>
            <button
              onClick={HandleAdventure}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Adventure
            </button>
          </div>
        </div>

        
        <div className=" md:block hidden absolute z-20 bottom-0 left-0 w-full h-full overflow-hidden ">
          <Ballpit count={100} gravity={0.6} friction={0.9} wallBounce={0.8} minSize={0.2} maxSize={0.8} followCursor={false} ambientColor={16777215} colors={[16711680, 65280, 255, 16776960, 65535, 16711935]} />
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
