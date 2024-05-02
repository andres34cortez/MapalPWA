'use client'
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { ProjectCard } from "@/components/ProjectCard";
import { GetServerSideProps } from "next";
import { unstable_noStore as noStore } from "next/cache";

export const dynamic = "force-dynamic";
export async function getProyects(): Promise<ProjectCardType[]> {
  noStore();
  const projects = await client.fetch(
    `*[_type == "projects"]{name, type, month, year, state, text, localidad, superficie, comitente, "images": images[] {'url': asset->url}}`
  );
  return projects;
}

export type ProjectCardType = {
  name: string;
  month: string;
  year: string;
  text: string;
  localidad: string;
  superficie: string;
  comitente: string;
  images: Image[];
  state: string;
  type: string;
};

type Image = {
  url: string;
};

type Props = {
  tipo: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tipo = context.query.tipo;
  return {
    props: { tipo },
  };
};
//coomentario para ver si se sana

export default async function Proyectos({ tipo }: Props) {
  const projects = await getProyects();
  const filteredProjects = projects.filter((project) => project.type === tipo);
  return (
    <>
      <div className='container mx-auto py-[40px] relative'>
        <p className='uppercase font-bold text-[18px]'>Proyectos</p>

        <div className='flex gap-[20px] flex-wrap mt-[25px]'>
          <Link
            href='/proyectos?tipo=viales'
            scroll={false}
            className={`uppercase font-bold text-[15px] py-2 px-3 ${
              tipo === "viales"
                ? "border-b-2 border-[#fdba13] text-[#fdba13]"
                : "border-b-2 border-[#b2b2b2]"
            }`}
          >
            Viales
          </Link>
          <Link
            href='/proyectos?tipo=arquitectura'
            scroll={false}
            className={`uppercase font-bold text-[15px] py-2 px-3 ${
              tipo === "arquitectura"
                ? "border-b-2 border-[#fdba13] text-[#fdba13]"
                : "border-b-2 border-[#b2b2b2]"
            }`}
          >
            Arquitectura
          </Link>
          <Link
            href='/proyectos?tipo=hidraulicas'
            scroll={false}
            className={`uppercase font-bold text-[15px] py-2 px-3 ${
              tipo === "hidraulicas"
                ? "border-b-2 border-[#fdba13] text-[#fdba13]"
                : "border-b-2 border-[#b2b2b2]"
            }`}
          >
            Hidraulicas
          </Link>
          <Link
            href='/proyectos?tipo=infraestructura'
            scroll={false}
            className={`uppercase font-bold text-[15px] py-2 px-3 ${
              tipo === "infraestructura"
                ? "border-b-2 border-[#fdba13] text-[#fdba13]"
                : "border-b-2 border-[#b2b2b2]"
            }`}
          >
            Infraestructura
          </Link>
          <Link
            href='/proyectos?tipo=inmobiliaria'
            scroll={false}
            className={`uppercase font-bold text-[15px] py-2 px-3 ${
              tipo === "inmobiliaria"
                ? "border-b-2 border-[#fdba13] text-[#fdba13]"
                : "border-b-2 border-[#b2b2b2]"
            }`}
          >
            Inmobiliaria
          </Link>
        </div>

        <div className='flex flex-col space-y-5 mt-[50px]'>
          {filteredProjects.map((proyecto, index) => {
            return (
              <ProjectCard
                name={proyecto.name}
                month={proyecto.month}
                year={proyecto.year}
                text={proyecto.text}
                localidad={proyecto.localidad}
                superficie={proyecto.superficie}
                comitente={proyecto.comitente}
                images={proyecto.images}
                key={index}
                state={proyecto.state}
                type={proyecto.type}
              />
            );
          })}
        </div>
      </div>
      ;
    </>
  );
}
