import Image from "next/image";
import { AppAssets } from "../app/constants/assets";

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-96 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Discover the World's Best</h1>
    
      <h1 className="text-4xl font-bold">Explore the Best of India</h1>
    </div>
  );
};

export default Hero;
