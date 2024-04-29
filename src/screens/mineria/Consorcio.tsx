"use client";

import Image from "next/image";
import logoMapal from "../../assets/logoMapal.svg";
import logoSigma from "../../assets/mineriaPage/sigmaLogo.png";
import arrows from "../../assets/mineriaPage/arrows.png";

export default function Consorcio() {
  return (
    <div className='bg-white py-8 md:py-12 lg:py-16'id="Equipamiento">
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8'>
          <div className='w-full md:w-1/2 lg:w-2/5 flex flex-col gap-4 md:gap-6'>
            <h3 className='uppercase font-bold text-sm md:text-lg'>
              Consorcio Minero
            </h3>
            <p className='font-light text-sm md:text-lg'>
              MAPAL SIGMA, somos el resultado de la visión de dos empresas
              sanjuaninas de más de 60 años de experiencia en obras públicas y
              privadas. A través de nuestro consorcio impulsamos y potenciamos
              el desarrollo de servicios y obras en la minería, de exploración,
              civiles, viales, de arte e infraestructura, tanto en San Juan como
              en otras provincias del país. Contribuyendo al desarrollo y
              progreso sustentable del proyecto, la comunidad y la sociedad
              donde nos desenvolvemos.
            </p>
          </div>
          <div className='flex items-center justify-center w-full md:w-1/2 lg:w-3/5'>
            <div className='flex gap-4 md:gap-6'>
              <Image src={logoMapal} alt='logo Mapal' width={169} height={40} />
              <Image src={arrows} alt='flechas' width={153} height={34} />
              <Image src={logoSigma} alt='logo Sigma' width={119} height={69} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
