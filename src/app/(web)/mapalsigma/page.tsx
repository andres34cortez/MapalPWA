"use client";
import Image from "next/image";
import bg from "@/assets/mineriaPage/bg.png";
import logoMS from "@/assets/logonuevo.png";
import Consorcio from "@/screens/mineria/Consorcio";
import Servicios from "@/screens/mineria/Servicios";
import Desarrollo from "@/screens/mineria/Desarrollo";
import Proyectos from "@/screens/mineria/Proyectos";
import ConsorcioGallery from "@/screens/mineria/ConsorcioGallery";

// logosClientes
import AustralGold from "@/assets/cambios2025/logosMapal/AustralGold.png";
import Barrick from "@/assets/cambios2025/logosMapal/Barrick.svg";
import Belararox from "@/assets/cambios2025/logosMapal/Belararox.png";
import Casposo from "@/assets/cambios2025/logosMapal/Casposo.png";
import CBB from "@/assets/cambios2025/logosMapal/Cbb.png";
import Glencore from "@/assets/cambios2025/logosMapal/Glencore.svg";
import LosAzules from "@/assets/cambios2025/logosMapal/LosAzules.png";
import McEwenMining from "@/assets/cambios2025/logosMapal/McEwenMining.png";
import MinasArgentinas from "@/assets/cambios2025/logosMapal/MinasArgentinas.png";
import PerezCompanc from "@/assets/cambios2025/logosMapal/PerezCompanc.jpg";
import ShandongGold from "@/assets/cambios2025/logosMapal/ShandongGoldMining.png";
import Techint from "@/assets/cambios2025/logosMapal/Techint.svg";
import Veladero from "@/assets/cambios2025/logosMapal/Veladero.png";
import YamanaGold from "@/assets/cambios2025/logosMapalSigma/Logo_Yamana_Gold.png";
import YPF from "@/assets/cambios2025/logosMapal/YPF.svg";

import { useLanguage } from "@/context/LayoutContext";

export default function Mineria() {
  return (
    <div className="relative flex flex-col items-center mx-0 overflow-x-hidden">
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
      <div className="flex flex-col max-w-[1280px] pb-8 my-6">
        <Clientes />
      </div>
    </div>
  );
}

const Clientes = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col mt-[10px] z-10">
      <div className="flex flex-row items-center relative mb-2 md:px-8 xl:px-0 py-6">
        <div className="absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]" />
        <h2 className="font-bold uppercase text-sm md:text-lg">
          {language === "ESP" ? <>NUESTROS CLIENTES</> : <>OUR CLIENTS</>}
        </h2>
      </div>
      <div className=" bg-transparent max-w-7xl mx-auto md:pl-0 pl-3">
        <MarqueeEmpresas />
      </div>
    </div>
  );
};

const MarqueeEmpresas = () => {
  return (
    <div className="bg-white px-20">
      <div className="whitespace-nowrap animate-marquee flex items-center py-3 gap-8">
        <Image src={Barrick} alt="" className="h-[50px] w-auto p-3 =mx-3" />
        <Image src={ShandongGold} alt="" className="h-[55px] w-auto px-3" />
        <Image src={Veladero} alt="" className="h-[70px] w-auto" />
        <Image src={McEwenMining} alt="" className="h-[45px] w-auto px-2" />
        <Image src={LosAzules} alt="" className="h-[45px] w-auto" />
        <Image src={MinasArgentinas} alt="" className="h-[70px] w-auto" />
        <Image src={Glencore} alt="" className="h-[150px] w-auto -my-[50px]" />
        <Image src={YamanaGold} alt="" className="h-[60px] w-auto" />
        <Image src={AustralGold} alt="" className="h-[50px] w-auto" />
        <Image src={Casposo} alt="" className="h-[50px] w-auto px-3" />
        <Image src={Belararox} alt="" className="h-[60px] w-auto" />
        <Image src={YPF} alt="" className="h-[50px] w-auto" />
        <Image src={CBB} alt="" className="h-[40px] w-auto px-4" />
        <Image src={Techint} alt="" className="h-[70px] w-auto mx-6" />
        <Image src={PerezCompanc} alt="" className="h-[70px] w-auto" />
        {/*  */}
        <Image src={Barrick} alt="" className="h-[50px] w-auto p-3 =mx-3" />
        <Image src={ShandongGold} alt="" className="h-[55px] w-auto px-3" />
        <Image src={Veladero} alt="" className="h-[70px] w-auto" />
        <Image src={McEwenMining} alt="" className="h-[45px] w-auto px-2" />
        <Image src={LosAzules} alt="" className="h-[45px] w-auto" />
        <Image src={MinasArgentinas} alt="" className="h-[70px] w-auto" />
        <Image src={Glencore} alt="" className="h-[150px] w-auto -my-[50px]" />
        <Image src={YamanaGold} alt="" className="h-[60px] w-auto" />
        <Image src={AustralGold} alt="" className="h-[50px] w-auto" />
        <Image src={Casposo} alt="" className="h-[50px] w-auto px-3" />
        <Image src={Belararox} alt="" className="h-[60px] w-auto" />
        <Image src={YPF} alt="" className="h-[50px] w-auto" />
        <Image src={CBB} alt="" className="h-[40px] w-auto px-4" />
        <Image src={Techint} alt="" className="h-[70px] w-auto mx-6" />
        <Image src={PerezCompanc} alt="" className="h-[70px] w-auto" />
        {/*  */}
        <Image src={Barrick} alt="" className="h-[50px] w-auto p-3 =mx-3" />
        <Image src={ShandongGold} alt="" className="h-[55px] w-auto px-3" />
        <Image src={Veladero} alt="" className="h-[70px] w-auto" />
        <Image src={McEwenMining} alt="" className="h-[45px] w-auto px-2" />
        <Image src={LosAzules} alt="" className="h-[45px] w-auto" />
        <Image src={MinasArgentinas} alt="" className="h-[70px] w-auto" />
        <Image src={Glencore} alt="" className="h-[150px] w-auto -my-[50px]" />
        <Image src={YamanaGold} alt="" className="h-[60px] w-auto" />
        <Image src={AustralGold} alt="" className="h-[50px] w-auto" />
        <Image src={Casposo} alt="" className="h-[50px] w-auto px-3" />
        <Image src={Belararox} alt="" className="h-[60px] w-auto" />
        <Image src={YPF} alt="" className="h-[50px] w-auto" />
        <Image src={CBB} alt="" className="h-[40px] w-auto px-4" />
        <Image src={Techint} alt="" className="h-[70px] w-auto mx-6" />
        <Image src={PerezCompanc} alt="" className="h-[70px] w-auto" />
      </div>
    </div>
  );
};
