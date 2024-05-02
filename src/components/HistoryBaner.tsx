'use client'
import React from "react";
import iconHistory from "@/assets/IconHisrory.png";
import fondoHistory from "@/assets/FondoHistory.png";
import Image from "next/image";

export default function HistoryBaner() {
  return (
    <div className='bg-black w-full' id='Historia'>
      <div className='hidden md:flex w-full items-center justify-center gap-12 overflow-hidden '>
        <div className='bg-historyTexture w-full h-[372px] -mt-4 absolute' />
        <Image
          src={fondoHistory}
          alt=''
          className='absolute w-full h-[372px]'
        />
        <div className='border border-[#FDBA13] rounded-sm'>
          <Image
            src={iconHistory}
            alt=''
            className='-mt-2 -ml-2 pb-2 pr-2 min-w-[200px]'
          />
        </div>
        <div className='max-w-[800px]'>
          <h1 className='text-[#FAB918] text-3xl mt-8 '>
            NUESTRA <br /> HISTORIA
          </h1>
          <h2 className='text-[#FFFFFF] text-sm  font-medium pt-4'>
            MAPAL S.A. es una empresa Sanjuanina de alcance nacional con más de
            50 años de experiencia en construcción de Obras Viales, Civiles,
            Hidráulicas, Servicios mineros, Servicios petroleros y desarrollo
            inmobiliario.
          </h2>
          <h3 className='text-[#bababa] text-sm pt-8'>
            Desde su comienzo en el año 1967 bajo el nombre de CONSTRUCCIONES
            JULIO CESAR PALLUCCHINI y posteriormente a partir del año 1980,
            MAPAL S.A. ha realizado un gran número de obras y servicios en la
            provincia de San Juan y en distintas provincias de nuestro País,
            posicionándola como una de las principales compañías de zona cuyo en
            el rubro.
          </h3>
          <h3 className='text-[#bababa] text-sm italic pt-8 pb-8'>
            “Desde su comienzo en el año 1967 bajo el nombre de CONSTRUCCIONES{" "}
            <br />
            JULIO CESAR PALLUCCHINI y posteriormente a partir del año 1980,
            MAPAL.”
          </h3>
        </div>
      </div>

      <div className='md:hidden text-center'>
        <h1 className='text-[#FAB918] text-3xl mt-8'>NUESTRA HISTORIA</h1>
        <div className=' w-auto rounded-sm overflow-hidden flex justify-center'>
          <div className='border border-[#FDBA13] rounded-sm'>
            <Image
              src={iconHistory}
              alt=''
              className='-mt-2 -ml-2 pb-2 pr-2 min-w-[200px]'
            />
          </div>
        </div>
        <div className='text-[#FFFFFF] text-sm font-medium pt-4 px-4'>
          <p>
            MAPAL S.A. es una empresa Sanjuanina de alcance nacional con más de
            50 años de experiencia en construcción de Obras Viales, Civiles,
            Hidráulicas, Servicios mineros, Servicios petroleros y desarrollo
            inmobiliario.
          </p>
          <p className='pt-4'>
            Desde su comienzo en el año 1967 bajo el nombre de CONSTRUCCIONES
            JULIO CESAR PALLUCCHINI y posteriormente a partir del año 1980,
            MAPAL S.A. ha realizado un gran número de obras y servicios en la
            provincia de San Juan y en distintas provincias de nuestro País,
            posicionándola como una de las principales compañías de zona cuyo en
            el rubro.
          </p>
          <p className='italic pt-4 pb-8'>
            “Desde su comienzo en el año 1967 bajo el nombre de CONSTRUCCIONES
            JULIO CESAR PALLUCCHINI y posteriormente a partir del año 1980,
            MAPAL.”
          </p>
        </div>
      </div>
    </div>
  );
}
