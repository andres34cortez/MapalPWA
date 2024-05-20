import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { ProjectCard } from "@/components/ProjectCard";
import { GetServerSideProps } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { useLanguage } from "@/context/LayoutContext";
import React, { useState, useEffect } from "react";

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

const Proyectos = ({ tipo }: Props) => {
  const [projects, setProjects] = useState<ProjectCardType[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await getProyects();
      setProjects(fetchedProjects);
    };
    fetchData();
  }, []);

  const filteredProjects = projects.filter((project) => project.type === tipo);

  return (
    <div>
      <div className='container sm:px-0 mx-auto py-[40px] relative max-w-[1280px]'>
        <div className='flex flex-row items-center relative'>
          <div className='absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]' />
          <p className='uppercase font-bold text-[18px]'>
          {language === "ESP" ? <>Obras</> : <>Works and Projects</>} </p>
        </div>
        <div className='flex gap-[20px] flex-wrap mt-[25px]'>
          <Link
            href='/proyectos?tipo=viales'
            scroll={false}
            className={`uppercase font-bold text-[15px] pt-2 px-3 hover:text-[#B2B2B2] ${
              tipo === "viales" && " text-[#fdba13]"
            }`}
          >
            {language === "ESP" ? <>Viales</> : <>ROADS</>}
          </Link>
          <Link
            href='/proyectos?tipo=arquitectura'
            scroll={false}
            className={`uppercase font-bold text-[15px] pt-2 px-3 hover:text-[#B2B2B2] ${
              tipo === "arquitectura" && " text-[#fdba13]"
            }`}
          >
            {language === "ESP" ? <>Arquitectura</> : <>ARCHITECTURE</>}
          </Link>
          <Link
            href='/proyectos?tipo=hidraulicas'
            scroll={false}
            className={`uppercase font-bold text-[15px] pt-2 px-3 hover:text-[#B2B2B2] ${
              tipo === "hidraulicas" && " text-[#fdba13]"
            }`}
          >
          {language === "ESP" ? <>Hidraulicas</> : <>HYDRAULICS </>}   
          </Link>
          <Link
            href='/proyectos?tipo=petroleos'
            scroll={false}
            className={`uppercase font-bold text-[15px] pt-2 px-3 hover:text-[#B2B2B2] ${
              tipo === "petroleos" && " text-[#fdba13]"
            }`}
          >
            {language === "ESP" ? <>Petróleos</> : <>PETROLEUM</>} 
          </Link>
          <Link
            href='/proyectos?tipo=puentes'
            scroll={false}
            className={`uppercase font-bold text-[15px] pt-2 px-3 hover:text-[#B2B2B2] ${
              tipo === "puentes" && " text-[#fdba13]"
            }`}
          >
           {language === "ESP" ? <>Puentes</> : <>BRIDGES</>}  
          </Link>
          <Link
            href='/proyectos?tipo=infraestructura'
            scroll={false}
            className={`uppercase font-bold text-[15px] pt-2 px-3 hover:text-[#B2B2B2] ${
              tipo === "infraestructura" && " text-[#fdba13]"
            }`}
          >
           {language === "ESP" ? <>Infraestructura</> : <>INFRASTRUCTURE</>}  
          </Link>
          <Link
            href='/proyectos?tipo=inmobiliaria'
            scroll={false}
            className={`uppercase font-bold text-[15px] pt-2 px-3 hover:text-[#B2B2B2] ${
              tipo === "inmobiliaria" && " text-[#fdba13]"
            }`}
          >
           {language === "ESP" ? <>Inmobiliaria</> : <>REAL ESTATE</>}  
          </Link>
        </div>

        <div className='flex flex-col space-y-5 mt-[32px]'>
          {filteredProjects.map((proyecto, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
