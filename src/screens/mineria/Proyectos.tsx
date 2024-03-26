import Image, { StaticImageData } from "next/image";
import imagen from "../../assets/mineriaPage/bg-naves.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import foto01 from "../../assets/mineriaPage/proyectosCarousel/proyecto01-foto1.png";
import foto02 from "../../assets/mineriaPage/proyectosCarousel/proyecto01-foto2.png";
import foto03 from "../../assets/mineriaPage/proyectosCarousel/proyecto01-foto3.png";
import foto04 from "../../assets/mineriaPage/proyectosCarousel/proyecto02-foto1.png";
import foto05 from "../../assets/mineriaPage/proyectosCarousel/proyecto02-foto2.png";
import foto06 from "../../assets/mineriaPage/proyectosCarousel/proyecto02-foto3.png";
import foto07 from "../../assets/mineriaPage/proyectosCarousel/proyecto03-foto1.png";
import foto08 from "../../assets/mineriaPage/proyectosCarousel/proyecto02-foto2.png";

const proyectos = [
  {
    nombre: "Los Azules",
    fecha: "Diciembre",
    anio: "2015",
    text: "11.400 m2 Cubiertos, Edificio Principal con 14 Consultorios Externos, Internación, Especialidades: Laboratorio, Diálisis, Radiografía, etc., Zona de Servicios, Estacionamiento, Casa de Médicos, Calles Internas, Instalaciones de Gas, Agua; Electricidad, Gases Medicinales, Voz y Datos. Estructura de Hormigón Armado y Mampostería, con Pisos Cerámicos y Graníticos.",
    localidad: "Pocito, San Juan",
    superficie: "27.935,32 m2",
    comitente: "Dirección Provincial de Arquitectura",
    images: [foto01, foto02, foto03],
  },
  {
    nombre: "Veladero",
    fecha: "Diciembre",
    anio: "2015",
    text: "11.400 m2 Cubiertos, Edificio Principal con 14 Consultorios Externos, Internación, Especialidades: Laboratorio, Diálisis, Radiografía, etc., Zona de Servicios, Estacionamiento, Casa de Médicos, Calles Internas, Instalaciones de Gas, Agua; Electricidad, Gases Medicinales, Voz y Datos. Estructura de Hormigón Armado y Mampostería, con Pisos Cerámicos y Graníticos.",
    localidad: "Pocito, San Juan",
    superficie: "27.935,32 m2",
    comitente: "Dirección Provincial de Arquitectura",
    images: [foto04, foto05, foto06],
  },
  {
    nombre: "Veladero",
    fecha: "Diciembre",
    anio: "2015",
    text: "11.400 m2 Cubiertos, Edificio Principal con 14 Consultorios Externos, Internación, Especialidades: Laboratorio, Diálisis, Radiografía, etc., Zona de Servicios, Estacionamiento, Casa de Médicos, Calles Internas, Instalaciones de Gas, Agua; Electricidad, Gases Medicinales, Voz y Datos. Estructura de Hormigón Armado y Mampostería, con Pisos Cerámicos y Graníticos.",
    localidad: "Pocito, San Juan",
    superficie: "27.935,32 m2",
    comitente: "Dirección Provincial de Arquitectura",
    images: [foto07, foto08],
  },
];

export default function Proyectos() {
  return (
    <div className="py-[40px] flex flex-col gap-[60px]">
      <h3 className="uppercase font-bold text-[15px]">
        Proyectos en desarrollo
      </h3>
      <div className="flex flex-col gap-[34px]">
        {proyectos.map((proyecto, index) => {
          return (
            <ProyectoCard
              nombre={proyecto.nombre}
              fecha={proyecto.fecha}
              anio={proyecto.anio}
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
  images: StaticImageData[];
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
      </div>
    </div>
  );
}
