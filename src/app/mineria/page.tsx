import Image from "next/image";
import bg from "../../assets/mineriaPage/bg.png";
import logoMS from "../../assets/mineriaPage/logo.png";
import Consorcio from "@/screens/mineria/Consorcio";
import Servicios from "@/screens/mineria/Servicios";
import Desarrollo from "@/screens/mineria/Desarrollo";
import Proyectos from "@/screens/mineria/Proyectos";

export default function Mineria() {
  return (
    <div className="w-[100%] relative flex flex-col">
      <div className="w-[100%] h-[600px] flex justify-center items-center relative">
        <Image
          src={logoMS}
          alt="Logo Mapal Sigma"
          className="absolute z-10"
          width={273}
        />
        <Image src={bg} alt="Fondo" fill className="object-cover" />
      </div>
      <div className="flex justify-between">
        <div className="h-[2px] flex-1 bg-[#FDBA13] w-full mt-[50px]"></div>
        <Consorcio />
        <div className="flex-1"></div>
      </div>
      <Servicios />
      <div className="border-r border-r-[#FDBA13] container mx-auto">
        <Desarrollo />
        <Proyectos />
      </div>
    </div>
  );
}
