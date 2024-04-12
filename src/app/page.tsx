"use client";

import { Content } from "@/screens/home/Content";
import HistoryBaner from "@/components/HistoryBaner";
import { HeroCarousel } from "@/screens/home/HeroCarousel";
import Metricas from "@/screens/home/Metricas";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center overflow-x-hidden">
      <HeroCarousel />
      <Metricas />
      <HistoryBaner />
      <Content />
      <Footer />
    </div>
  );
}
