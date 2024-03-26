"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logoMapal from "../../assets/logoMapal.svg";
import logoSigma from "../../assets/mineriaPage/sigmaLogo.png";
import arrows from "../../assets/mineriaPage/arrows.png";
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
import foto10 from "../../assets/mineriaPage/mineriaCarousel/foto10.png";
import foto11 from "../../assets/mineriaPage/mineriaCarousel/foto11.png";
import foto12 from "../../assets/mineriaPage/mineriaCarousel/foto12.png";
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

export default function Consorcio() {
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
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="bg-white py-[40px]">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-[550px] gap-[25px] flex flex-col ">
            <h3 className="uppercase font-bold text-[15px]">
              Consorcio Minero
            </h3>
            <p className="font-light text-[15px]">
              MAPAL SIGMA, somos el resultado de la visión de dos empresas
              sanjuaninas de mas de 60 años de experiencia en obras publicas y
              privadas. A través de nuestro consorcio impulsamos y potenciamos
              el desarrollo de servicios y obras en la minería, de exploración,
              civiles, viales, de arte e infraestructura, tanto en San Juan como
              en otra provincias del país. Contribuyendo al desarrollo y
              progreso sustentable del proyecto, la comunidad y la sociedad
              donde nos desenvolvemos
            </p>
          </div>
          <div className="flex items-center gap-[35px] justify-center w-[50%]">
            <Image src={logoMapal} alt="logo Mapal" width={169} height={40} />
            <Image src={arrows} alt="flechas" width={153} height={34} />
            <Image src={logoSigma} alt="logo Sigma" width={119} height={69} />
          </div>
        </div>
      </div>
      <Carousel
        setApi={setApi}
        className="container mx-auto w-[100%] items-center justify-center mt-[50px]"
        opts={{ slidesToScroll: 1, loop: true }}
      >
        <CarouselContent className="w-[100%]">
          {mineriaImage.map((foto, index) => {
            if (index % 5 === 0) {
              const group = mineriaImage.slice(index, index + 5);
              return group.map((img, i) => (
                <Image src={img} key={i} alt="imagen" className="w-[20%]" />
              ));
            }
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
