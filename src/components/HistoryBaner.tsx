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
                MAPAL S.A.C.I.A. is a construction and services company based in
                San Juan, Argentina, with national reach and over 60 years of
                proven experience delivering large-scale projects for both the
                public and private sectors. The company’s portfolio includes
                road infrastructure, civil works, hydraulic projects, mining
                services, oil & gas operations, and real estate development.
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
                Founded in 1967 as CONSTRUCCIONES JULIO CÉSAR PALLUCCHINI, and
                operating under the MAPAL S.A.C.I.A. name since 1980, the
                company has established itself as an industry leader across
                three generations, becoming one of the most respected and
                recognized names in the construction and mining sectors in San
                Juan Province and the Cuyo region.
              </>
            )}
          </h3>
          <h3 className="text-[#bababa] text-sm italic pt-8 pb-8">
            {language === "ESP" ? (
              <>“Julio C. Pallucchini (padre), Socio Fundador.”</>
            ) : (
              <>“Julio C. Pallucchini (father), Founding Partner.”</>
            )}
          </h3>
        </div>
      </div>

      <div className="md:hidden text-center">
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
                MAPAL S.A.C.I.A. is a construction and services company based in
                San Juan, Argentina, with national reach and over 60 years of
                proven experience delivering large-scale projects for both the
                public and private sectors. The company’s portfolio includes
                road infrastructure, civil works, hydraulic projects, mining
                services, oil & gas operations, and real estate development.
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
                Founded in 1967 as CONSTRUCCIONES JULIO CÉSAR PALLUCCHINI, and
                operating under the MAPAL S.A.C.I.A. name since 1980, the
                company has established itself as an industry leader across
                three generations, becoming one of the most respected and
                recognized names in the construction and mining sectors in San
                Juan Province and the Cuyo region.
              </>
            )}
          </p>

          <p className="italic pt-4 pb-8">
            {language === "ESP" ? (
              <>“Julio C. Pallucchini (padre), Socio Fundador.”</>
            ) : (
              <>“Julio C. Pallucchini (father), Founding Partner.”</>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
