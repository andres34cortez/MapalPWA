import Image, { StaticImageData } from "next/image";
import imagen from "../../assets/mineriaPage/bg-naves.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { client } from "../../../sanity/lib/client";

export const dynamic = "force-dynamic";
export async function getProyects() {
  const projects = await client.fetch(
    `*[_type == "miningProjects"]{name, date, year, text, localidad, superficie, comitente, "images":image.asset->url}`
  );
  return projects;
}

export default async function Proyectos() {
  const projects = await getProyects();
  console.log(projects);

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
              <ProyectoCard
                nombre={proyecto.name}
                fecha={proyecto.date}
                anio={proyecto.year}
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
      ) : (
        <p>Todavia no hay proyectos</p>
      )}
    </div>
  );
}

type ProyectoCardType = {
  nombre: string;
  fecha: string;
  anio: string;
  text: string;
  localidad: string;
  superficie: string;
  comitente: string;
  images: string[];
};

export function ProyectoCard({
  nombre,
  fecha,
  anio,
  text,
  localidad,
  superficie,
  comitente,
  images,
}: ProyectoCardType) {
  console.log(images);
  return (
    <div className="border border-[#FDBA13] rounded-[4px] flex py-[20px] px-[25px] gap-[20px]">
      <div className="flex flex-col justify-between self-stretch flex-1">
        <div>
          <div className="text-[#FDBA13] text-[15px] mb-[10px]">
            <p className="font-bold">{nombre}</p>
            <p>Fecha: {fecha}</p>
            <p>{anio}</p>
          </div>
          <p className="text-[15px]">{text}</p>
        </div>
        <div className="text-[#FDBA13] text-[15px]">
          <p>Localidad: {localidad}</p>
          <p>Superficie: {superficie} m2</p>
          <p>Comitente: {comitente}</p>
        </div>
      </div>

      {/* <div className="flex-1">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {images.map((item, index) => {
              return (
                <CarouselItem key={index} className="h-[500px]">
                  <div className="h-full w-full relative">
                    <Image
                      src={item}
                      alt="imagen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div> */}
    </div>
  );
}
