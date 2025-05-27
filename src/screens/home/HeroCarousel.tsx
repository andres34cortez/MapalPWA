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
      }, 4500);
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
    <div className="w-screen overflow-hidden relative">
      <Carousel
        setApi={setApi}
        className="w-full items-center justify-center border"
      >
        <CarouselContent>
          {HeroImage.map((foto, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-full">
                <Image src={foto} alt="" className="w-full object-cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="absolute top-1/4 lg:top-[32%] left-4 md:left-20 lg:left-32 p-4 flex flex-col items-start z-10">
        <span className="text-lg md:text-6xl lg:text-7xl text-white">
          {language === "ESP" ? <>+60 Años </> : <>+60 Years </>}
        </span>
        <span className="text-lg md:text-4xl text-white">
          {language === "ESP" ? <>3 Generaciones</> : <>3 Generations</>}
        </span>
        <span className="text-lg md:text-4xl text-white">
          {language === "ESP" ? (
            <>Construyendo Historia</>
          ) : (
            <>One Timeless Legacy</>
          )}
        </span>
      </div>
    </div>
  );
}
