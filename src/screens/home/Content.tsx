"use client";

import * as React from "react";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import ResponsabilidadImg from "@/assets/responsabilidad.png";
import Link from "next/link";

export const dynamic = "force-dynamic";
export async function getCards() {
  const cards = await client.fetch(
    `*[_type == "card"]{title, description,link, "image":image.asset->url}`
  );
  return cards;
}

export function Content() {
  return (
    <div className="flex flex-col max-w-[1400px] w-full">
      <div className="pt-[90px] pb-[140px] border-r-2 border-[#FAB918] pr-[80px] mt-8 mb-12">
        <div className="contentTexture w-[1264px] h-[1640px] absolute left-0 -mt-[85px] " />
        <div className="flex flex-col z-10 bg-transparent">
          <Empresa />
          <News />
        </div>
      </div>
    </div>
  );
}

const Empresa = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold mb-2">LA EMPRESA</h2>
      <div className="grid grid-cols-2">
        <div className="border-r-2 border-[#C8C8C8] pr-[70px] py-6 mr-[70px]">
          <h3 className="text-[#FAB918] font-bold">MISIÓN</h3>
          <p className="m-0 p-0 font-light text-sm mb-6">
            Contribuir al bienestar y evolución de la sociedad a través de la
            construcción de obras y servicios, ejecutándolos con calidad, en un
            entorno de seguridad y respeto por el medio ambiente, generando al
            mismo tiempo en la empresa, un ámbito propicio para el desarrollo
            profesional y personal de sus integrantes.
          </p>
          <h3 className="text-[#FAB918] font-bold">VISIÓN</h3>
          <p className="m-0 p-0 font-light text-sm mb-6">
            Ser una empresa constructora líder en el mercado nacional,
            reconocida por su cumplimiento, calidad, innovación, capacidad
            técnica y respeto por el medio ambiente, que supere sus estándares
            día a día, logrando la máxima satisfacción de nuestros clientes y de
            todas las personas que trabajamos en esta.
          </p>
          <h3 className="text-[#FAB918] font-bold">VALORES</h3>
          <ul className="m-0 p-0 font-light text-sm">
            <li>• Respeto por el medio ambiente. </li>
            <li>• Honestidad y transparencia en nuestros actos. </li>
            <li>
              • Aprendizaje continuo y trabajo en equipo en búsqueda de la
              excelencia.
            </li>
            <li>
              • Compromiso con los resultados, la calidad y seguridad de
              nuestras obras y personas que trabajan en las mismas.
            </li>
            <li>
              • Respeto por nuestros proveedores, clientes y todas las personas
              relacionadas a nuestra compañía.
            </li>
            <li>
              • Respeto por las personas, sus creencias y sus diferencias.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-[#FAB918] font-bold">RESPONSABILIDAD SOCIAL</h3>
          <p className="m-0 p-0 font-light text-sm mb-6 text-justify">
            MAPAL S.A. define la calidad a partir de una visión estratégica
            basada en el impacto positivo social y ambiental generado en el
            medio donde actúa y desarrolla sus obras y servicios. Consideramos
            primordial establecer relaciones con proveedores y trabajadores
            regionales como así también el fortalecimiento de la relación y
            cooperación de todos nuestros proveedores y trabajadores que nos
            acompañan desde el inicio, así lograr un gran desarrollo de capital
            humano amplio y poder brindar a nuestros clientes y a la sociedad
            productos con valor agregado.
          </p>
          <div className="border border-[#FDBA13] ml-4 mt-16 pb-4">
            <Image src={ResponsabilidadImg} alt="" className="-ml-4 -mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

async function News() {
  const cards = await getCards();

  return (
    <div className="flex flex-col mt-[100px] z-10">
      <h2 className="font-bold mb-2">NOTICIAS / PRENSA</h2>
      <div className="grid grid-cols-3 gap-2">
        {/* @ts-ignore */}
        {cards.map((card, index) => (
          <NewsCard card={card} key={index} />
        ))}
      </div>
    </div>
  );
}

type Card = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const NewsCard = (props: { card: Card }) => {
  console.log("aca", props.card);
  return (
    <div className="rounded-[8px] flex flex-col py-3 px-5 w-full max-h-[300px] border shadow-[0px_0px_20px_-10px_rgba(0,0,0,0.4)] bg-white">
      <div className="relative w-full h-[200px]">
        <Image
          src={props.card.image}
          alt="image"
          fill
          className="object-cover"
        />
      </div>
      <h1>{props.card.title}</h1>
      <p>{props.card.description}</p>
      <Link href={props.card.link} className="pointer" target="_blank">
        ver mas
      </Link>
    </div>
  );
};
