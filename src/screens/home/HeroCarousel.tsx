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
import { useLanguage } from "@/context/LayoutContext";

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const HeroImage = [foto1, foto2, foto3, foto4, foto5, foto6];
  const { language } = useLanguage();
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className='w-screen overflow-hidden'>
      <Carousel
        setApi={setApi}
        className='w-full items-center justify-center border'
      >
        <CarouselContent>
          {HeroImage.map((foto, index) => (
            <CarouselItem key={index}>
              <div className='relative w-full h-full'>
                <Image src={foto} alt='' className='w-full object-cover' />
                {index === 0 && (
                  <div className='absolute bottom-4 left-14  lg:top-1/3 md:left-20 p-4 flex flex-col items-start lg:left-32'>
                    <span className='  text-lg md:text-6xl lg:text-7xl text-white  text-outline-black'>
                      {language === "ESP" ? <>+50 Años</> : <>+50 Years</>}
                    </span>
                    <span className='  text-lg md:text-4xl lg:text-4xl text-white  '>
                      {language === "ESP" ? (
                        <>Construyendo Historia</>
                      ) : (
                        <>Building History</>
                      )}
                    </span>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
