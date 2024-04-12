"use client";

import Image from "next/image";
import logoMapal from "../../assets/logoMapal.svg";
import logoSigma from "../../assets/mineriaPage/sigmaLogo.png";
import arrows from "../../assets/mineriaPage/arrows.png";

export default function Consorcio() {
  return (
    <div className="bg-white py-[40px]">
      <div className="container mx-auto">
        <div className="flex justify-between gap-[25px]">
          <div className="w-[550px] gap-[25px] flex flex-col ">
            <h3 className="uppercase font-bold text-[15px]">
              Consorcio Minero
            </h3>
            <p className="font-light text-[15px]">
              MAPAL SIGMA, somos el resultado de la visión de dos empresas
              sanjuaninas de mas de 60 años de experiencia en obras publicas y
              privadas. A través de nuestro consorcio impulsamos y potenciamos
              el desarrollo de servicios y obras en la minería, de exploración,
              civiles, viales, de arte e infraestructura, tanto en San Juan como
              en otra provincias del país. Contribuyendo al desarrollo y
              progreso sustentable del proyecto, la comunidad y la sociedad
              donde nos desenvolvemos
            </p>
          </div>
          <div className="flex items-center gap-[35px] justify-center w-[50%]">
            <Image src={logoMapal} alt="logo Mapal" width={169} height={40} />
            <Image src={arrows} alt="flechas" width={153} height={34} />
            <Image src={logoSigma} alt="logo Sigma" width={119} height={69} />
          </div>
        </div>
      </div>
    </div>
  );
}
