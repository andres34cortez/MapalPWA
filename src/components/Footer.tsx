"use client";
import React from "react";
import LogoFooter from "@/assets/LogoFooter1.svg";
import Image from "next/image";
import Facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import youtube from "@/assets/youtube.png";
import linkdin from "@/assets/linkdin.png";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LayoutContext";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const { language } = useLanguage();

  const scrollTo = (id: string) => {
    if (pathname !== "/") {
      router.push("/#company");
    } else {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="w-full bg-black pt-10 px-[15px] overflow-x-hidden "
      id="Contacto"
    >
      <div className="flex justify-between gap-2 max-w-[1240px] mx-auto">
        <div className="basis-2/6 flex justify-center lg:basis-auto">
          <Image src={LogoFooter} alt="Logo Mapal" />
        </div>
        <div className="hidden md:flex flex-col lg:basis-auto">
          <a
            href={pathname !== "/" ? "/#empresa" : undefined}
            onClick={() => scrollTo("empresa")}
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            {language === "ESP" ? <>La empresa</> : <>Company</>}
          </a>
          <a
            href={pathname !== "/" ? "/#prensa" : undefined}
            onClick={() => scrollTo("prensa")}
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            {language === "ESP" ? <>Prensa</> : <>Press</>}
          </a>
          <a
            href="/proyectos"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            {language === "ESP" ? <>Proyectos</> : <>Proyects</>}
          </a>
          <a
            href="/mapalsigma"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            {language === "ESP" ? <>Mineria</> : <>Mining</>}
          </a>
          {/* <a
            href="#"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            Equipamiento
          </a> */}
          {/* <a
            href="#"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            Contacto
          </a> */}
          <a
            href="#"
            className="uppercase text-white cursor-pointer hover:underline text-[14px] w-max"
          >
            {language === "ENG" ? (
              <span>
                <span className="underline">ING/</span>ESP
              </span>
            ) : (
              <span>
                ING/ <span className="underline">ESP</span>
              </span>
            )}
          </a>
        </div>
        <div className="basis-3/6 flex flex-col gap-3 pl-2 lg:basis-auto">
          <div>
            <p className="uppercase text-white text-[14px] font-medium">
              {language === "ESP" ? <> Oficinas</> : <>Offices</>}
            </p>
            <p className="text-white text-[14px] font-light cursor-pointer hover:underline">
              Tucumán 523 NORTE, CP 5413 Chimbas, San Juan.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="uppercase text-white text-[14px] font-medium">
              {language === "ESP" ? <>Contáctenos</> : <>Contact Us</>}
            </p>
            <p className="text-white text-[14px] font-light cursor-pointer hover:underline">
              (+54) 264 4313310
            </p>
            <p className="text-white text-[14px] font-light cursor-pointer hover:underline">
              (+54) 264 4313355
            </p>
            <a
              href="mailto:comercial@mapal.com.ar"
              className="text-white text-[14px] font-light cursor-pointer hover:underline"
            >
              comercial@mapal.com.ar
            </a>
            <a
              href="mailto:rrhh@mapal.com.ar"
              className="text-white text-[14px] font-light cursor-pointer hover:underline"
            >
              rrhh@mapal.com.ar
            </a>
          </div>
        </div>
        <p className="text-white hidden lg:flex lg:place-self-center">
          <a
            href="https://drive.google.com/drive/folders/157n6lUTFU2lcUDj65B4trtPjZRtzcQyv?usp=drive_link"
            target="_blank"
          >
            {language === "ESP" ? <>Descargas</> : <>Downloads</>}
          </a>
        </p>
        <div className="basis-1/6 flex flex-col justify-center md:flex-row lg:gap-4 lg:basis-auto">
          <div className="flex flex-col gap-2 items-end lg:flex-row md:items-start lg:items-center">
            <a
              href="https://www.facebook.com/MapalSACIA.SJ/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-6 h-6 object-contain"
                src={Facebook}
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/mapal-s-a-c-i-a/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-6 h-6 object-contain"
                src={linkdin}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://youtube.com/@mapalsacia-constructionmin2997?si=XjYl2W5kTearQZfU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-6 h-6 object-contain"
                src={youtube}
                alt="YouTube"
              />
            </a>

            <a
              href="https://www.instagram.com/mapal.sacia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-6 h-6 object-contain"
                src={instagram}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#fdba13] h-[1px] w-full mt-10 mb-9"></div>
    </div>
  );
}
