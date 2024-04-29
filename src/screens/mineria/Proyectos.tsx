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
    <div className='py-8 md:py-12 lg:py-16 flex flex-col gap-8 md:gap-12 lg:gap-16'>
      <h3 className='uppercase font-bold text-sm md:text-lg'>
        Proyectos en desarrollo
      </h3>

      <div className='grid   gap-6 md:gap-8 lg:gap-10'>
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
