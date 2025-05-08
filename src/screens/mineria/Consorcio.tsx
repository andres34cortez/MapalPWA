"use client";

import Image from "next/image";
import logoMapal from "@/assets/logoMapal.svg";
import logoSigma from "@/assets/cambios2025/LogoSigma.svg";
import arrows from "@/assets/mineriaPage/arrows.png";
import { useLanguage } from "@/context/LayoutContext";
import DialogDescarga from "@/components/DialogDescarga";

export default function Consorcio() {
  const { language } = useLanguage();
  return (
    <div
      className="bg-white py-8 md:py-12 lg:py-16 xl:max-w-[1280px] px-4 xl:px-0"
      id="Equipamiento"
    >
      <div className="container xl:px-0 mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
          <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-4 md:gap-6">
            <div className="flex flex-row items-center relative mb-2">
              <div className="absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]" />
              <h2 className="font-bold uppercase text-sm md:text-lg">
                {language === "ESP" ? (
                  <>Consorcio Minero</>
                ) : (
                  <>MINING CONSORTIUM</>
                )}
              </h2>
            </div>
            <p className="font-light text-sm md:text-base">
              {language === "ESP" ? (
                <>
                  MAPAL SIGMA, somos el resultado de la visión de dos empresas
                  sanjuaninas de más de 60 años de experiencia en obras públicas
                  y privadas. A través de nuestro consorcio impulsamos y
                  potenciamos el desarrollo de servicios y obras en la minería,
                  de exploración, civiles, viales, de arte e infraestructura,
                  tanto en San Juan como en otras provincias del país.
                  Contribuyendo al desarrollo y progreso sustentable del
                  proyecto, la comunidad y la sociedad donde nos desenvolvemos.
                </>
              ) : (
                <>
                  MAPAL SIGMA, is the result of the vision of two companies from
                  San Juan with over 60 years of experience in public and
                  private works. Through our consortium, we drive and enhance
                  the development of services and projects in mining,
                  exploration, civil, roads and infrastructure sectors, both in
                  San Juan and in other provinces of the country. We contribute
                  to the sustainable development and progress of the project,
                  the community, and the society in which we operate.
                </>
              )}
            </p>
            <div className="flex items-center justify-center">
              <Image
                src={logoMapal}
                alt="logo Mapal"
                className="w-[60%] md:w-full md:h-[40px] md:-mr-6 md:-ml-6"
              />
              <Image
                src={arrows}
                alt="flechas"
                className="mx-2 w-0 md:mx-4 md:w-[100px] lg:mx-8 lg:w-[120px]"
              />
              <Image
                src={logoSigma}
                alt="logo Sigma"
                className="w-auto h-[53px] md:h-[150px] md:-ml-[56px] md:-my-8"
              />
            </div>
            <div className="-mt-6">
              <DialogDescarga>
                <h4 className="cursor-pointer hover:text-[#1d2d93] text-[#201D93] text-xs">
                  {language === "ESP" ? (
                    <>Descarga nuestro Brochure Online</>
                  ) : (
                    <>Download our mining brochure Online</>
                  )}
                </h4>
              </DialogDescarga>
              {/* <a
                href="https://drive.google.com/drive/folders/157n6lUTFU2lcUDj65B4trtPjZRtzcQyv?usp=drive_link"
                target="_blank"
              >
                <h4 className="cursor-pointer hover:text-[#1d2d93] text-[#201D93] text-xs">
                  {language === "ESP" ? (
                    <>Descarga nuestro Brochure Online</>
                  ) : (
                    <>Download our mining brochure Online</>
                  )}
                </h4>
              </a> */}
            </div>
          </div>
          <div className="flex flex-col items-start justify-between">
            <iframe
              width="620"
              height="350"
              src="https://www.youtube.com/embed/hOq-UXOI2fA?rel=0&modestbranding=1&showinfo=0&controls=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
