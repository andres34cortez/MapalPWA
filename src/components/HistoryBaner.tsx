"use client";
import React from "react";
import history1 from "@/assets/cambios2025/fotos/history1.jpg";
import fondoHistory from "@/assets/FondoHistory.png";
import history2 from "@/assets/cambios2025/fotos/history2.jpg";
import Image from "next/image";
import { useLanguage } from "@/context/LayoutContext";
export default function HistoryBaner() {
  const { language } = useLanguage();

  return (
    <div className="bg-black w-full" id="Historia">
      <div className="hidden md:flex w-full items-center justify-center gap-12 overflow-hidden py-12 relative">
        <div className="bg-historyTexture w-full h-[372px] absolute" />
        <Image
          src={fondoHistory}
          alt=""
          className="absolute w-full h-[372px]"
        />
        <div className="flex flex-col items-center">
          <div className="border border-[#FDBA13] rounded-sm pr-3 pb-3">
            <Image
              src={history1}
              alt=""
              className="max-w-[250px] rounded-sm -mt-3 -ml-3"
            />
          </div>
          <h3 className="text-[#bababa] text-xs italic pt-4 max-w-[250px] text-center">
            {language === "ESP" ? (
              <>“Julio C. Pallucchini (padre), Socio Fundador.”</>
            ) : (
              <>“Julio C. Pallucchini (father), Founding Partner.”</>
            )}
          </h3>
          <h1 className="text-white text-3xl text-center mt-2">1967</h1>
          <div className="w-0.5 h-10 bg-[#bababa] mt-2" />
        </div>
        <div className="max-w-[630px] text-center justify-center flex flex-col items-center -mt-20 pt-4">
          <h1 className="text-[#FAB918] text-3xl mt-8 border-b pb-2 max-w-[400px] w-full border-[#FAB918]">
            {language === "ESP" ? <>NUESTRA HISTORIA</> : <>OUR HISTORY</>}
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
        </div>
        <div className="flex flex-col items-center">
          <div className="border border-[#FDBA13] rounded-sm pr-3 pb-3">
            <Image
              src={history2}
              alt=""
              className="max-w-[250px] rounded-sm -mt-3 -ml-3"
            />
          </div>
          <h3 className="text-[#bababa] text-xs italic pt-4 max-w-[250px] text-center">
            {language === "ESP" ? (
              <>“Franco Pallucchini, Socio-CEO y 3ra generación.”</>
            ) : (
              <>“Franco Pallucchini, Partner & CEO, 3rd Generation.”</>
            )}
          </h3>
          <h1 className="text-white text-3xl text-center mt-2">2025</h1>
          <div className="w-0.5 h-10 bg-[#bababa] mt-2" />
        </div>
        <div className="absolute bottom-[30px] w-full h-[2px] bg-gray-200 max-w-[1380px]">
          {/* Gradientes en los extremos */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none" />

          {/* Línea con pelotitas */}
          <div className="flex justify-between items-center w-full relative -top-[5px] px-8 z-0">
            <div className="rounded-full bg-[#FAB918] w-2 h-2" />
            <div className="rounded-full bg-[#FAB918] w-3 h-3" />
            <div className="rounded-full bg-[#FAB918] w-2 h-2" />
            <div className="rounded-full bg-[#FAB918] w-2 h-2" />
            <div className="rounded-full bg-[#FAB918] w-2 h-2" />
            <div className="rounded-full bg-[#FAB918] w-2 h-2" />
            <div className="rounded-full bg-[#FAB918] w-2 h-2" />
            <div className="rounded-full bg-[#FAB918] w-3 h-3" />
            <div className="rounded-full bg-[#FAB918] w-2 h-2" />
          </div>
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
        <div className=" w-auto rounded-sm overflow-hidden flex justify-center mt-4">
          <div className="border border-[#FDBA13] rounded-sm pb-2 pr-2 ">
            <Image
              src={history1}
              alt=""
              className="-mt-2 -ml-2 max-w-[250px]"
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
