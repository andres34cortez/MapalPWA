import { client } from "../../../sanity/lib/client";
import { ProjectCard } from "@/components/ProjectCard";

export const dynamic = "force-dynamic";
export async function getProyects() {
  const projects = await client.fetch(
    `*[_type == "projects" && type == "mineria"]{name, type, month, year, state, text, localidad, superficie, comitente, "images": images[] {'url': asset->url}}`
  );
  return projects;
}

export default async function Proyectos() {
  const projects = await getProyects();

  return (
    <div className="py-[40px] flex flex-col gap-[60px]">
      <h3 className="uppercase font-bold text-[15px]">
        Proyectos en desarrollo
      </h3>
      {projects.length > 0 ? (
        <div className="flex flex-col gap-[34px]">
          {/* @ts-ignore */}
          {projects.map((proyecto, index) => {
            return (
              <ProjectCard
                nombre={proyecto.name}
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
      ) : (
        <div className="w-full min-h-[200px] flex justify-center items-center bg-[#fdba13] rounded-sm">
          <p className="text-black text-xl">Todavia no hay proyectos</p>
        </div>
      )}
    </div>
  );
}
