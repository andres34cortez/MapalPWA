import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProjectCardType = {
  nombre: string;
  fecha: string;
  anio: string;
  text: string;
  localidad: string;
  superficie: string;
  comitente: string;
  images: Image[];
};

type Image = {
  url: string;
};

export function ProjectCard({
  nombre,
  fecha,
  anio,
  text,
  localidad,
  superficie,
  comitente,
  images,
}: ProjectCardType) {
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

      <div className="flex-1">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {images.map((item, index) => {
              return (
                <CarouselItem key={index} className="h-[500px]">
                  <div className="h-full w-full relative">
                    <Image
                      src={item.url}
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
      </div>
    </div>
  );
}
