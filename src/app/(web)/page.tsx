"use client";

import { Content } from "@/screens/home/Content";
import HistoryBaner from "@/components/HistoryBaner";
import { HeroCarousel } from "@/screens/home/HeroCarousel";
import Metricas from "@/screens/home/Metricas";
import PhotosHomeBanner from "@/components/PhotosHomeBanner";

export default function Home() {
  return (
    <div className='flex flex-col w-full items-center overflow-x-hidden'>
      <HeroCarousel />
      <Metricas />
      <HistoryBaner />
      <div id='empresa' className='-z-30 h-[90px]' />
      <Content />
      <div className='hidden lg:block w-full'>
        <PhotosHomeBanner />
      </div>
    </div>
  );
}
