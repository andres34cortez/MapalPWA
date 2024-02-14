"use client";

import HistoryBaner from "@/components/HistoryBaner";
import { HeroCarousel } from "@/screens/home/HeroCarousel";
import Metricas from "@/screens/home/Metricas";

export default function Home() {
  return (
    <div className='flex flex-col w-full items-center'>
      <HeroCarousel />
      <Metricas />
      <HistoryBaner />
    </div>
  );
}
