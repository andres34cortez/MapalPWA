"use client";
import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import foto1 from "@/assets/heroCarousel/foto1.png";
import foto2 from "@/assets/heroCarousel/foto2.png";
import foto3 from "@/assets/heroCarousel/foto3.png";
import foto4 from "@/assets/heroCarousel/foto4.png";
import foto5 from "@/assets/heroCarousel/foto5.png";
import foto6 from "@/assets/heroCarousel/foto6.png";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const HeroImage = [foto1, foto2, foto3, foto4, foto5, foto6];

  React.useEffect(() => {
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
    <div className="w-screen overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full items-center justify-center border"
      >
        <CarouselContent>
          {HeroImage.map((foto, index) => (
            <CarouselItem key={index}>
              <Image src={foto} alt="" className="w-full object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        {/* {HeroImage.map((_, index) => (
          <div
            className={cn(
              "rounded-full w-3 h-3",
              index === count ? "bg-white" : "bg-[#f4f4f4]"
            )}
            key=""
          />
        ))} */}
      </Carousel>
    </div>
  );
}
