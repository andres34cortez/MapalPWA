"use client";
import Image from "next/image";
import bg from "../../assets/mineriaPage/bg.png";
import logoMS from "../../assets/mineriaPage/logo.png";
import Consorcio from "@/screens/mineria/Consorcio";
import Servicios from "@/screens/mineria/Servicios";
import Desarrollo from "@/screens/mineria/Desarrollo";
import Proyectos from "@/screens/mineria/Proyectos";
import ConsorcioGallery from "@/screens/mineria/ConsorcioGallery";

export default function Mineria() {
  return (
    <div className="relative flex flex-col items-center mx-0">
      <div className="w-full h-[600px] md:h-[400px] lg:h-[500px] flex justify-center left-0 items-center relative">
        <Image
          src={logoMS}
          alt="Logo Mapal Sigma"
          className=" left-[-10px] relative z-10"
          width={250}
          height={30}
        />
        <Image src={bg} alt="Fondo" layout="fill" objectFit="cover" />
      </div>
      <Consorcio />
      <ConsorcioGallery />
      <Servicios />
      <div className="flex flex-col max-w-[1280px]">
        <Desarrollo />
        <Proyectos />
      </div>
    </div>
  );
}
