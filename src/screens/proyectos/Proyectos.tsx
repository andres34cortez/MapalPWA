import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { ProjectCard } from "@/components/ProjectCard";

export const dynamic = "force-dynamic";
export async function getProyects(): Promise<ProjectCardType[]> {
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

export default async function Proyectos({ tipo }: Props) {
  const projects = await getProyects();
  const filteredProjects = projects.filter((project) => project.type === tipo);
  return (
    <>
      <div className="container mx-auto py-[40px] relative">
        <p className="uppercase font-bold text-[18px]">Proyectos</p>

        <div className="flex gap-[20px] flex-wrap mt-[25px]">
          <Link
            href="/proyectos?tipo=viales"
            className="uppercase font-bold text-[15px]"
          >
            Viales
          </Link>
          <Link
            href="/proyectos?tipo=arquitectura"
            className="uppercase font-bold text-[15px]"
          >
            Arquitectura
          </Link>
          <Link
            href="/proyectos?tipo=hidrualicas"
            className="uppercase font-bold text-[15px]"
          >
            Hidraulicas
          </Link>
          <Link
            href="/proyectos?tipo=infraestructura"
            className="uppercase font-bold text-[15px]"
          >
            Infraestructura
          </Link>
          <Link
            href="/proyectos?tipo=mineria"
            className="uppercase font-bold text-[15px]"
          >
            Mineria
          </Link>
          <Link
            href="/proyectos?tipo=inmobiliaria"
            className="uppercase font-bold text-[15px]"
          >
            Inmobiliaria
          </Link>
        </div>

        <div className="flex flex-col space-y-5 mt-[50px]">
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
