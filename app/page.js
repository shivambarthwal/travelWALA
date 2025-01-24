"use client"
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import Card from "../components/Card";
import MostVisitedChart from "../components/MostVisitedChart";
import MarqueeText from "../components/MarqueeText";
export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -50 }} 
      transition={{ duration: 0.5 }} 
    >
      <Banner />
      <section className="mb-5">
        <Card />
      </section>
      <MarqueeText text=" | GOA | BALI | THAILAND | AUSTRALIA" speed={2} direction="left" className="text-2xl" />
      <MostVisitedChart />
    </motion.div>
  );
}