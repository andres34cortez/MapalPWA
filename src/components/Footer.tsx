import React from "react";
import LogoFooter from "@/assets/LogoFooter1.svg";
import Image from "next/image";
import Facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import x from "@/assets/x.png";
import youtube from "@/assets/youtube.png";
import linkdin from "@/assets/linkdin.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="w-full bg-black pt-10 px-[15px] overflow-x-hidden "
      id="Contacto"
    >
      <div className="flex justify-between gap-2 max-w-[1920px] mx-auto">
        <div className="basis-2/6 flex justify-center lg:basis-auto">
          <Image src={LogoFooter} alt="Logo Mapal" />
        </div>

        <div className="hidden md:flex flex-col lg:basis-auto">
          <Link
            href="#"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            La empresa
          </Link>
          <Link
            href="#"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            Prensa
          </Link>
          <Link
            href="#"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            Proyectos
          </Link>
          <Link
            href="#"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            Mineria
          </Link>
          <Link
            href="#"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            Equipamiento
          </Link>
          <Link
            href="#"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            Contacto
          </Link>
          <Link
            href="#"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            ING/ESP
          </Link>
        </div>

        <div className="basis-3/6 flex flex-col gap-3 pl-2 lg:basis-auto">
          <div>
            <p className="uppercase text-white text-[14px] font-medium">
              Oficinas
            </p>
            <p className="text-white text-[14px] font-light cursor-pointer hover:underline">
              Tucumán 523 NORTE, CP 5413 Chimbas, San Juan.
            </p>
          </div>

          <div>
            <p className="uppercase text-white text-[14px] font-medium">
              Contáctenos
            </p>
            <p className="text-white text-[14px] font-light cursor-pointer hover:underline">
              (+54) 264 4313310
            </p>
            <p className="text-white text-[14px] font-light cursor-pointer hover:underline">
              (+54) 264 4313355
            </p>
            <p className="text-white text-[14px] font-light cursor-pointer hover:underline">
              comercial@mapal.com.ar
            </p>
          </div>
        </div>

        <div className="basis-1/6 flex flex-col justify-center md:flex-row lg:gap-4 lg:basis-auto">
          <p className="text-white hidden lg:flex lg:place-self-center">
            Descargas
          </p>
          <div className="flex flex-col gap-2 items-end lg:flex-row md:items-start lg:items-center">
            <Image
              className="w-6 h-6 object-contain"
              src={Facebook}
              alt="Facebook"
            />
            <Image
              className="w-6 h-6 object-contain"
              src={linkdin}
              alt="LinkedIn"
            />
            <Image
              className="w-6 h-6 object-contain"
              src={youtube}
              alt="YouTube"
            />
            <Image
              className="w-6 h-6 object-contain"
              src={instagram}
              alt="Instagram"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#fdba13] h-[1px] w-full mt-10"></div>
    </div>
  );
}
