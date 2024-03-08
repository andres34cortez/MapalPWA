import React from "react";
import LogoFooter from "@/assets/LogoFooter1.svg";
import Image from "next/image";
import Facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import x from "@/assets/x.png";
import youtube from "@/assets/youtube.png";
import linkdin from "@/assets/linkdin.png";

export default function Footer() {
  return (
    <div className=' w-full h-[400px] bg-black pt-24'>
      <div className='flex flex-row gap-24 text-white items-center justify-center '>
        <div>
          <Image src={LogoFooter} alt='hola'></Image>
        </div>
        <div className=' flex flex-col gap-2'>
          <p className='cursor-pointer hover:underline'>LA EMPRESA</p>
          <p className='cursor-pointer hover:underline'>PRENSA</p>
          <p className='cursor-pointer hover:underline'>PROYECTO</p>
          <p className='cursor-pointer hover:underline'>MINERIA</p>
          <p className='cursor-pointer hover:underline'>EQUIPAMIENTO</p>
          <p className='cursor-pointer hover:underline'>CONTACTO</p>
          <p className='cursor-pointer hover:underline'>ING/ESP</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p>OFICINAS:</p>
          <p className='cursor-pointer hover:underline'>
            Tucumán 523 NORTE, CP 5413 Chimbas, San Juan
          </p>
          <p className='pt-5'></p>
          <p>CONTÁTENOS:</p>
          <p className='cursor-pointer hover:underline'>(+54) 2645 4313310</p>
          <p className='cursor-pointer hover:underline'>(+54) 2645 4313355</p>

          <p className='cursor-pointer hover:underline'>
            comercial@mapal.com.ar
          </p>
        </div>
        <div>Descargas</div>
        <div className='flex gap-2'>
          <Image className='w-6 h-6' src={linkdin} alt=''></Image>
          <Image className='w-6 h-6' src={instagram} alt=''></Image>
          <Image className='w-6 h-6' src={Facebook} alt=''></Image>
          <Image className='w-6 h-6' src={x} alt=''></Image>
          <Image className='w-6 h-6' src={youtube} alt=''></Image>
        </div>
      </div>
      <div className='w-[95%] h-[2px] bg-[#FDBA13] mt-10 ml-[50px]'></div>
    </div>
  );
}
