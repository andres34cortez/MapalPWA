"use client";
import React from "react";
import iconHistory from "@/assets/IconHisrory.png";
import fondoHistory from "@/assets/FondoHistory.png";
import Image from "next/image";
import { useLanguage } from "@/context/LayoutContext";
export default function HistoryBaner() {
  const { language } = useLanguage();

  return (
    <div className="bg-black w-full" id="Historia">
      <div className="hidden md:flex w-full items-center justify-center gap-12 overflow-hidden ">
        <div className="bg-historyTexture w-full h-[372px] -mt-4 absolute" />
        <Image
          src={fondoHistory}
          alt=""
          className="absolute w-full h-[372px]"
        />
        <div className="border border-[#FDBA13] rounded-sm">
          <Image
            src={iconHistory}
            alt=""
            className="-mt-2 -ml-2 pb-2 pr-2 min-w-[200px]"
          />
        </div>
        <div className="max-w-[800px]">
          <h1 className="text-[#FAB918] text-3xl mt-8">
            {language === "ESP" ? (
              <>
                NUESTRA <br /> HISTORIA
              </>
            ) : (
              <>
                OUR <br /> HISTORY
              </>
            )}
          </h1>
          <h2 className="text-[#FFFFFF] text-sm  font-medium pt-4">
            {language === "ESP" ? (
              <>
                MAPAL S.A.C.I.A. es una empresa sanjuanina con proyección
                nacional y más de 60 años de trayectoria en la construcción de
                obras de gran envergadura y en la prestación de servicios, tanto
                para el ámbito público como privado. Su experiencia abarca obras
                viales, civiles, hidráulicas, servicios mineros, oil & gas y
                real estate.
              </>
            ) : (
              <>
                MAPAL S.A.C.I.A. is a company based in San Juan, Argentina, with
                national reach and over 60 years of experience in the
                construction of large-scale projects and the provision of
                services for both the public and private sectors. Its expertise
                includes roadworks, civil and hydraulic engineering, mining
                services, oil & gas, and real estate.
              </>
            )}
          </h2>
          <h3 className="text-[#bababa] text-sm pt-8">
            {language === "ESP" ? (
              <>
                Desde sus inicios en 1967, bajo el nombre CONSTRUCCIONES JULIO
                CÉSAR PALLUCCHINI, y a partir de 1980 como MAPAL S.A.C.I.A., la
                compañía ha consolidado su liderazgo a lo largo de tres
                generaciones, posicionándose como una de las principales
                referentes del sector en la provincia de San Juan y en la región
                de Cuyo.
              </>
            ) : (
              <>
                Since its beginnings in 1967 under the name CONSTRUCCIONES JULIO
                CÉSAR PALLUCCHINI, and from 1980 onward as MAPAL S.A.C.I.A., the
                company has strengthened its leadership over three generations,
                becoming one of the leading references in the sector in the
                province of San Juan and the Cuyo region.
              </>
            )}
          </h3>
          <h3 className="text-[#bababa] text-sm italic pt-8 pb-8">
            {language === "ESP" ? (
              <>“Julio C. Pallucchini (padre), socio fundador.”</>
            ) : (
              <>“Julio C. Pallucchini (father), founding partner.”</>
            )}
          </h3>
        </div>
      </div>

      <div className="md:hidden text-center">
        <h1 className="text-[#FAB918] text-3xl mt-8">NUESTRA HISTORIA</h1>
        <div className=" w-auto rounded-sm overflow-hidden flex justify-center">
          <div className="border border-[#FDBA13] rounded-sm">
            <Image
              src={iconHistory}
              alt=""
              className="-mt-2 -ml-2 pb-2 pr-2 min-w-[200px]"
            />
          </div>
        </div>
        <div className="text-[#FFFFFF] text-sm font-medium pt-4 px-4">
          <p>
            {language === "ESP" ? (
              <>
                MAPAL S.A.C.I.A. es una empresa sanjuanina con proyección
                nacional y más de 60 años de trayectoria en la construcción de
                obras de gran envergadura y en la prestación de servicios, tanto
                para el ámbito público como privado. Su experiencia abarca obras
                viales, civiles, hidráulicas, servicios mineros, oil & gas y
                real estate.
              </>
            ) : (
              <>
                MAPAL S.A.C.I.A. is a company based in San Juan, Argentina, with
                national reach and over 60 years of experience in the
                construction of large-scale projects and the provision of
                services for both the public and private sectors. Its expertise
                includes roadworks, civil and hydraulic engineering, mining
                services, oil & gas, and real estate.
              </>
            )}
          </p>
          <p className="pt-4">
            {language === "ESP" ? (
              <>
                Desde sus inicios en 1967, bajo el nombre CONSTRUCCIONES JULIO
                CÉSAR PALLUCCHINI, y a partir de 1980 como MAPAL S.A.C.I.A., la
                compañía ha consolidado su liderazgo a lo largo de tres
                generaciones, posicionándose como una de las principales
                referentes del sector en la provincia de San Juan y en la región
                de Cuyo.
              </>
            ) : (
              <>
                Since its beginnings in 1967 under the name CONSTRUCCIONES JULIO
                CÉSAR PALLUCCHINI, and from 1980 onward as MAPAL S.A.C.I.A., the
                company has strengthened its leadership over three generations,
                becoming one of the leading references in the sector in the
                province of San Juan and the Cuyo region.
              </>
            )}
          </p>

          <p className="italic pt-4 pb-8">
            {language === "ESP" ? (
              <>“Julio C. Pallucchini (padre), socio fundador.”</>
            ) : (
              <>“Julio C. Pallucchini (father), founding partner.”</>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
