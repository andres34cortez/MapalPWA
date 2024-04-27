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
import { ProjectCardType } from "@/screens/proyectos/Proyectos";

export function ProjectCard({
  name,
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
            <p className="font-bold">{name}</p>
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
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          className="h-[300px] lg:h-[500px] relative"
        >
          <CarouselContent>
            {images.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="h-[300px] lg:h-[500px] border"
                >
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
          <div className="flex lg:hidden py-3 w-full justify-center items-center gap-[8px] absolute bottom-0">
            {images.map((items, index) => {
              return (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-2xl ${
                    index === current - 1
                      ? "bg-white  border border-[#fab918]"
                      : "bg-[#fab918] border border-[#fab918]"
                  }`}
                  onClick={() => handleCircleClick(index)}
                ></div>
              );
            })}
          </div>
        </Carousel>
        <div className="hidden lg:flex py-3 w-full justify-center items-center gap-[8px]">
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
