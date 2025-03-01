import React from "react";
import { NavbarDemo } from "../components/home/navbar";
import { GlobeDemo } from "../components/home/GlobeDemo";
import { FaDiscord, FaPlay } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import Playsection from "@/components/home/Playsection";

const HomePage = () => {
  return (
    <div className="h-screen w-full">
      <NavbarDemo />
      <GlobeDemo />

      <HowItWorks />
      <div className="flex flex-col justify-center items-center mt-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Exciting Features
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Unlock a world of fun with AI-generated clues, interactive challenges,
          and competitive gameplay! 🚀✨
        </p>

        <FeaturesSection />
      </div>
      <Playsection />
      <footer className="py-10 bg-[#1a1a1a] text-white text-center">
        <p>&copy; 2023 Globetrotter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
