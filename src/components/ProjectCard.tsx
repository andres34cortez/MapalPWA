"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

type ProjectCardType = {
  nombre: string;
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

export function ProjectCard({
  nombre,
  month,
  year,
  text,
  localidad,
  superficie,
  comitente,
  images,
  state,
}: ProjectCardType) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleCircleClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="border border-[#FDBA13] rounded-[4px] flex flex-col-reverse lg:flex-row py-[20px] px-[25px] gap-[30px] lg:gap-[20px]">
      <div className="flex flex-col justify-between self-stretch flex-1 gap-[25px]">
        <div>
          <div className="text-[#FDBA13] text-[15px] mb-[10px]">
            <p className="font-bold">{nombre}</p>
            <p>
              Fecha: {month} {year}
            </p>
          </div>
          <p className="text-[16px]">{text}</p>
        </div>
        <div className="text-[#FDBA13] text-[16px]">
          <p>Estado: {state}</p>
          <p>Localidad: {localidad}</p>
          <p>Superficie: {superficie} m2</p>
          <p>Comitente: {comitente}</p>
        </div>
      </div>

      <div className="flex-1">
        <Carousel opts={{ loop: true }} setApi={setApi}>
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
        <div className="pt-3 flex w-full justify-center items-center gap-[8px]">
          {images.map((items, index) => {
            return (
              <div
                key={index}
                className={`w-3 h-3 rounded-2xl ${
                  index === current - 1
                    ? "bg-transparent  border border-[#fab918]"
                    : "bg-[#fab918] border border-[#fab918]"
                }`}
                onClick={() => handleCircleClick(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
