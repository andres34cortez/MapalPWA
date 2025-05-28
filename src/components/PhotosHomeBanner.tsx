"use client";
import React from "react";
import Image from "next/image";
import photo1 from "@/assets/cambios2025/fotos/footer_min.jpg";
import photo2 from "@/assets/cambios2025/fotos/obras_equipos/Mapal5_2.jpg";
import photo3 from "@/assets/cambios2025/fotos/footer3_min.jpg";
import photo4 from "@/assets/cambios2025/fotos/obras_equipos/Mapal5_4.jpg";
import photo5 from "@/assets/cambios2025/fotos/obras_equipos/Mapal5_5.jpg";
import sigma from "@/assets/photosBaner/sigma.png";

export default function PhotosHomeBanner() {
  return (
    <div className="flex flex-col overflow-hidden w-full bg-black items-center justify-center">
      <div className="flex flex-row">
        <Image src={photo1} alt="" className="h-[254px] w-1/5 object-cover" />
        <Image src={photo2} alt="" className="h-[254px] w-1/5 object-cover" />
        <Image src={photo3} alt="" className="h-[254px] w-1/5 object-cover" />
        <Image src={photo4} alt="" className="h-[254px] w-1/5 object-cover" />
        <Image src={photo5} alt="" className="h-[254px] w-1/5 object-cover" />
      </div>
      <div className="relative">
        <Image src={sigma} className="relative z-10" alt="" />
      </div>
    </div>
  );
}
