import { client } from "../../../sanity/lib/client";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectCardType } from "../proyectos/Proyectos";

export const dynamic = "force-dynamic";
export async function getProyects(): Promise<ProjectCardType[]> {
  const projects = await client.fetch(
    `*[_type == "projects" && type == "mineria"]{name, type, month, year, state, text, localidad, superficie, comitente, "images": images[] {'url': asset->url}}`
  );
  return projects;
}

export default async function Proyectos() {
  const projects = await getProyects();

  return (
    <div className="py-8 md:py-12 lg:py-16 container sm:p-0 gap-8 px-8 xl:px-0">
      <div className="flex flex-row items-center relative mb-2 md:px-8 xl:px-0">
        <div className="absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]" />
        <h2 className="font-bold uppercase text-sm md:text-lg">
          Proyectos en desarrollo
        </h2>
      </div>
      <div className="grid gap-6 md:gap-8 lg:gap-10 md:px-8 xl:px-0">
        {projects.map((proyecto, index) => (
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
  );
}
