"use client";

import Image from "next/image";
import Fondo from "@/assets/proyectosPage/ProyectosBanner.png";
import Banner from "@/screens/proyectos/Banner";
import Proyectos from "@/screens/proyectos/Proyectos";
import MetricasProyectos from "@/screens/proyectos/MetricasProyectos";
import { useLanguage } from "@/context/LayoutContext";

export default function ProyectosPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { tipo } = searchParams;
  const { language } = useLanguage();
  return (
    <div className="min-h-screen w-[100%] overflow-hidden">
      <div className="h-[300px] md:h-[600px] w-[100%] relative flex justify-center">
        <div className="w-full h-full container mx-auto absolute z-30 flex items-center justify-center md:justify-start">
          <p className="uppercase text-[38px] md:text-[64px] z-30 absolute text-white font-semibold">
            {language === "ESP" ? <>Obras y Proyectos</> : <>Projects</>}
          </p>
        </div>
        <div className="bg-black w-full h-full opacity-30 absolute z-20"></div>
        <Image
          src={Fondo}
          alt="fondo proyectos"
          fill
          className="object-cover"
        />
      </div>
      <MetricasProyectos />
      <Banner />
      <Proyectos tipo={(tipo || "viales") as string} />
    </div>
  );
}
