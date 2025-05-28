"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import foto01 from "../../assets/mineriaPage/mineriaCarousel/foto01.png";
import foto02 from "../../assets/mineriaPage/mineriaCarousel/foto02.png";
import foto03 from "../../assets/mineriaPage/mineriaCarousel/foto03.png";
import foto04 from "../../assets/mineriaPage/mineriaCarousel/foto04.png";
import foto05 from "../../assets/mineriaPage/mineriaCarousel/foto05.png";
import foto06 from "../../assets/mineriaPage/mineriaCarousel/foto06.png";
import foto07 from "../../assets/mineriaPage/mineriaCarousel/foto07.png";
import foto08 from "../../assets/mineriaPage/mineriaCarousel/foto08.png";
import foto09 from "../../assets/mineriaPage/mineriaCarousel/foto09.png";
import foto10 from "../../assets/cambios2025/fotos/mineria/DJI_20240417145324_0189_D.jpg";
import foto11 from "../../assets/mineriaPage/mineriaCarousel/foto11.png";
import foto12 from "../../assets/cambios2025/fotos/mineria/DJI_20240417115046_0128_D.jpg";
import foto13 from "../../assets/mineriaPage/mineriaCarousel/foto13.png";
import foto14 from "../../assets/mineriaPage/mineriaCarousel/foto14.png";
import foto15 from "../../assets/mineriaPage/mineriaCarousel/foto15.png";
import foto16 from "../../assets/mineriaPage/mineriaCarousel/foto16.png";
import foto17 from "../../assets/mineriaPage/mineriaCarousel/foto17.png";
import foto18 from "../../assets/mineriaPage/mineriaCarousel/foto18.png";
import foto19 from "../../assets/mineriaPage/mineriaCarousel/foto19.png";
import foto20 from "../../assets/mineriaPage/mineriaCarousel/foto20.png";
import foto21 from "../../assets/mineriaPage/mineriaCarousel/foto21.png";
import foto22 from "../../assets/mineriaPage/mineriaCarousel/foto22.png";
import Image from "next/image";
import useMediaQuery from "@/components/useMediaQuery";

export default function ConsorcioGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const mineriaImage = [
    foto01,
    foto02,
    foto03,
    foto04,
    foto05,
    foto06,
    foto07,
    foto08,
    foto09,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
    foto16,
    foto17,
    foto18,
    foto19,
    foto20,
    foto21,
    foto22,
  ];

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

  const mobile = useMediaQuery("screen and (max-width:768px)");

  // Auto-slide cada 3 segundos
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (!api) return;

    const startAutoSlide = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        const nextIndex = api.selectedScrollSnap() + 1;
        const total = api.scrollSnapList().length;

        if (nextIndex >= total) {
          api.scrollTo(0); // Ciclo infinito
        } else {
          api.scrollNext();
        }
      }, 1500);
    };

    // Iniciar autoplay
    startAutoSlide();

    // Reiniciar autoplay cuando el usuario interactúe
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      startAutoSlide(); // reinicia el temporizador
    });

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-[100%] items-center justify-center md:mt-[50px]"
      opts={{ slidesToScroll: 1, loop: true }}
    >
      <CarouselContent className="w-[100%]">
        {mineriaImage.map((foto, index) => {
          if (index % 5 === 0) {
            const group = mineriaImage.slice(index, index + 5);
            return group.map((img, i) => (
              <Image
                src={img}
                key={i}
                alt="imagen"
                className="min-w-[200px] md:min-w-[360px]"
              />
            ));
          }
        })}
      </CarouselContent>
      {!mobile && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
