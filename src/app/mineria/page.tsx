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
    <div className='relative flex flex-col'>
      <div className='w-full h-[600px] md:h-[400px] lg:h-[500px] flex justify-center left-0 items-center relative'>
        <Image
          src={logoMS}
          alt='Logo Mapal Sigma'
          className=' left-[-10px] relative z-10'
          width={250}
          height={30}
        />
        <Image src={bg} alt='Fondo' layout='fill' objectFit='cover' />
      </div>
      <div className='flex justify-between'>
        <div className='h-[2px] w-1/6 bg-[#FDBA13] mt-10 md:mt-20 lg:mt-10'></div>
        <Consorcio />
        <div className='w-1/6'></div>
      </div>
      <ConsorcioGallery />
      <Servicios />
      <div className='border-r border-r-[#FDBA13] container mx-auto'>
        <Desarrollo />
        <Proyectos />
      </div>
    </div>
  );
}
