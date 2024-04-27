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
};

type Image = {
  url: string;
};

export default async function Proyectos() {
  const projects = await getProyects();
  console.log(projects);
  return (
    <>
      <div className="container mx-auto py-[40px]">
        <div className="flex gap-[20px]">
          <p className="uppercase font-bold text-[15px]">Viales</p>
          <p className="uppercase font-bold text-[15px]">Arquitectura</p>
          <p className="uppercase font-bold text-[15px]">Hidraulicas</p>
          <p className="uppercase font-bold text-[15px]">Infraestructura</p>
          <p className="uppercase font-bold text-[15px]">Mineria</p>
          <p className="uppercase font-bold text-[15px]">Inmobiliaria</p>
        </div>

        <div className="flex flex-col space-y-5 mt-[50px]">
          {projects.map((proyecto, index) => {
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
              />
            );
          })}
        </div>
      </div>
      ;
    </>
  );
}
