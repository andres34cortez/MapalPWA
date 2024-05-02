'use client'
import Image from "next/image";
import FondoBanner from "../../assets/proyectosPage/fondo.png";
import Argentina from "../../assets/proyectosPage/argentina.svg";
import SanJuan from "../../assets/proyectosPage/sanJuan.svg";
import ArgentinaCompleto from "../../assets/proyectosPage/ArgentinaCompleto.png";
import SanJuanCompleto from "../../assets/proyectosPage/SanJuanCompleto.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [ArgentinaCompleto, SanJuanCompleto];

export default function Banner() {
  return (
    <div className='bg-black w-full h-[350px] relative flex justify-center'>
      <div className='w-full lg:hidden flex items-center'>
        <Carousel
          opts={{ loop: true }}
          className='h-[300px] lg:h-[500px] relative w-screen'
        >
          <CarouselContent>
            {images.map((item, index) => {
              return (
                <CarouselItem key={index} className='h-[300px]'>
                  <div className='h-full w-full relative'>
                    <Image
                      src={item}
                      alt='imagen'
                      fill
                      className='object-contain'
                    />
                  </div>
                </CarouselItem>
              );  
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className='hidden lg:grid container w-full h-full grid-cols-2 gap-[100px] absolute'>
        <div className='w-full h-full relative grid grid-cols-2 justify-center items-center'>
          <div className='flex-1 relative w-full h-full'>
            <Image
              src={Argentina}
              alt='mapa Argentina'
              fill
              className='object-contain'
            />
          </div>
          <div className='flex flex-col w-full h-full justify-center items-start px-[15px] gap-[15px]'>
            <div>
              <p className='uppercase text-[#fab918] text-[24px]'>ARGENTINA</p>
              <p className='uppercase text-white text-[16px]'>
                Obras a nivel nacional
              </p>
              <p className='uppercase text-[#fab918] font-light'>
                Works at national level
              </p>
            </div>

            <div className='flex flex-col gap-[5px]'>
              <div>
                <p className='uppercase text-white text-[14px]'>
                  +200 Obras realizada
                </p>
                <p className='uppercase text-[#fab918] font-light text-[14px]'>
                  +200 works carried out
                </p>
              </div>

              <div>
                <p className='uppercase text-white text-[14px]'>
                  +7 provincias alcanzadas
                </p>
                <p className='uppercase text-[#fab918] font-light text-[14px]'>
                  +7 provinces reached
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-full relative grid grid-cols-2 justify-center items-center'>
          <div className='flex-1 relative w-full h-full'>
            <Image
              src={SanJuan}
              alt='mapa San Juan'
              fill
              className='object-contain'
            />
          </div>
          <div className='flex flex-col w-full h-full justify-center items-start px-[15px] gap-[15px]'>
            <div>
              <p className='uppercase text-[#fab918] text-[24px]'>San Juan</p>
              <p className='uppercase text-white text-[16px]'>
                Obras a nivel provincial
              </p>
              <p className='uppercase text-[#fab918] font-light'>
                Provincial works
              </p>
            </div>

            <div className='flex flex-col gap-[5px]'>
              <div>
                <p className='uppercase text-white text-[14px]'>
                  +200 Obras realizada
                </p>
                <p className='uppercase text-[#fab918] font-light text-[14px]'>
                  +200 works carried out
                </p>
              </div>

              <div>
                <p className='uppercase text-white text-[14px]'>
                  17 departamentos alcanzados
                </p>
                <p className='uppercase text-[#fab918] font-light text-[14px]'>
                  17 departaments reached
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full relative'>
        <Image
          src={FondoBanner}
          alt='fondoBanner'
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
}
