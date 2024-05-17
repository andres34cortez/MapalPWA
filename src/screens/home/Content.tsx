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
    <div className="flex flex-col w-full">
      <div className="pt-0 pb-12 border-r-2 border-[#FAB918] pr-6 sm:pr-12 mt-4 mb-12 justify-center items-center">
        <div className="flex flex-col bg-transparent max-w-7xl mx-auto md:pl-0 pl-3">
          <Empresa />
          <div className="h-[90px]" id="prensa" />
          <News />
        </div>
      </div>
    </div>
  );
}
const Empresa = () => {
  return (
    <div className="flex flex-col sm:pl-6">
      <div className="flex flex-row items-center relative mb-2">
        <div className="absolute bg-[#FAB918] h-0.5 w-[270px] -left-[280px]" />
        <h2 className="font-bold">LA EMPRESA</h2>
      </div>
      <div className="flex flex-row justify-between flex-wrap sm:flex-nowrap">
        <div className="max-w-[450px] w-full">
          <h3 className="text-[#FAB918] font-bold">MISIÓN</h3>
          <p className="font-light text-sm mt-2 mb-6">
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
        <div className="w-0.5 bg-[#C8C8C8] min-h-full mx-5 hidden sm:flex" />
        <div className="max-w-[700px] w-full">
          <div className="mt-4">
            <h3 className="text-[#FAB918] font-bold">RESPONSABILIDAD SOCIAL</h3>
            <p className="m-0 p-0 font-light text-sm mb-12 text-justify">
              MAPAL S.A. define la calidad a partir de una visión estratégica
              basada en el impacto positivo social y ambiental generado en el
              medio donde actúa y desarrolla sus obras y servicios. Consideramos
              primordial establecer relaciones con proveedores y trabajadores
              regionales como así también el fortalecimiento de la relación y
              cooperación de todos nuestros proveedores y trabajadores que nos
              acompañan desde el inicio, así lograr un gran desarrollo de
              capital humano amplio y poder brindar a nuestros clientes y a la
              sociedad productos con valor agregado.
            </p>
            <div className="border-[#FDBA13] ml-4 pb-4 border items-center rounded-sm">
              <Image
                src={ResponsabilidadImg}
                alt=""
                className="md:-ml-4 md:-mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

async function News() {
  const cards = await getCards();

  return (
    <div className="flex flex-col mt-[10px] z-10">
      <div className="flex flex-row items-center relative mb-2">
        <div className="absolute bg-[#FAB918] h-0.5 w-[270px] -left-[280px]" />
        <h2 className="font-bold">NOTICIAS / PRENSA</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
  return (
    <div className="rounded-[8px] flex flex-col py-3 px-5 w-full max-h-[300px] border shadow-[0px_0px_20px_-10px_rgba(0,0,0,0.4)] bg-white">
      <div className="relative w-full h-[200px]">
        <Image
          src={props.card.image}
          alt="image"
          layout="fill"
          objectFit="cover"
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
