import { client } from "../../../sanity/lib/client";
import { ProjectCard } from "@/components/ProjectCard";

export const dynamic = "force-dynamic";
export async function getProyects() {
  const projects = await client.fetch(
    `*[_type == "projects"]{name, type, date, year, text, localidad, superficie, comitente, "images": images[] {'url': asset->url}}`
  );
  return projects;
}

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
          {/* @ts-ignore */}
          {projects.map((proyecto, index) => {
            return (
              <ProjectCard
                nombre={proyecto.nombre}
                fecha={proyecto.fecha}
                anio={proyecto.anio}
                text={proyecto.text}
                localidad={proyecto.localidad}
                superficie={proyecto.superficie}
                comitente={proyecto.comitente}
                images={proyecto.images}
                key={index}
              />
            );
          })}
        </div>
      </div>
      ;
    </>
  );
}
