"use client";

import construccionPuente from "../../assets/mineriaPage/construccionDePuentesIcon.png";
import movimientoSuelos from "../../assets/mineriaPage/movimientoDeSuelosIcon.png";
import obrasViales from "../../assets/mineriaPage/obrasVialesMineriaIcon.png";
import construccionNaves from "../../assets/mineriaPage/construccionDeNavesIndustrialesIcon.png";
import provisionEquipos from "../../assets/mineriaPage/provicionDeEquiposPesados.png";
import bgConstruccion from "../../assets/mineriaPage/bg-construccion.png";
import bgMovimiento from "../../assets/mineriaPage/bg-movimiento.png";
import bgObras from "../../assets/mineriaPage/bg-obras.png";
import bgNaves from "../../assets/mineriaPage/bg-naves.png";
import bgProvision from "../../assets/mineriaPage/bg-provision.png";
import Image, { StaticImageData } from "next/image";
import useMediaQuery from "@/components/useMediaQuery";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LayoutContext";

export default function Servicios() {
  const { language } = useLanguage();
  const items = [
    {
      name:
        language === "ESP" ? "Construcción de puentes" : "BRIDGE CONSTRUCTION",
      icon: construccionPuente,
      background: bgConstruccion,
      text:
        language === "ESP"
          ? "Diseño, planificación y ejecución de puentes, sobre ríos, carreteras y terrenos difíciles. La importancia de este servicio radica en su capacidad para mejorar la conectividad y facilitar el transporte, abriendo nuevas vías de comunicación y acceso"
          : "Design, planning, and construction of bridges over rivers, roads, and challenging terrains. This service plays a key role in improving connectivity and facilitating transportation, opening new routes for communication and access.",
    },
    {
      name: language === "ESP" ? "Movimiento de Suelos" : "EARTHWORKS",
      icon: movimientoSuelos,
      background: bgMovimiento,
      text:
        language === "ESP"
          ? "Movimientos de suelos, excavaciones, transporte desde cantera, relleno, compactación y perfilado, instalación de geomembrana, geotextiles y tuberías, entre otras actividades, como construcción de valles de lixiviación"
          : "Earthmoving, excavations, material hauling from quarries, backfilling, compaction, grading, installation of geomembranes, geotextiles, and pipelines, among other activities, including the construction of leach pads.",
    },
    {
      name: language === "ESP" ? "Obras viales minería" : "MINING ROADWORKS",
      icon: obrasViales,
      background: bgObras,
      text:
        language === "ESP"
          ? "Servicios de apertura, mantenimiento, reparación de caminos mineros, despeje de nieve y/o hielo, estabilización y reparación de los taludes laterales del camino, construcción y/o reemplazo de bermas de seguridad, construcción y/o mantenimiento de rampas de escape para salidas de emergencia, limpieza y remoción de material producto de grandes deslizamientos, derrumbes, avalanchas y/o crecientes."
          : "Services for the opening, maintenance, and repair of mining roads, snow and ice removal, stabilization and repair of road shoulders, construction and/or replacement of safety berms, building and maintenance of emergency escape ramps, and clearing and removal of debris from major landslides, rockfalls, avalanches, and flood events.",
    },
    {
      name:
        language === "ESP"
          ? "Construcción de naves industriales"
          : "INDUSTRIAL WAREHOUSE CONSTRUCTION",
      icon: construccionNaves,
      background: bgNaves,
      text:
        language === "ESP"
          ? "Brindamos soluciones integrales que impulsan el desarrollo de la minería, realizando obras de soporte fundamentales para la sostenibilidad de la misma, tales como naves industriales para diversos usos dentro de los proyectos mineros."
          : "We provide comprehensive solutions that support mining development through the construction of essential infrastructure, such as industrial warehouses for various operational needs within mining projects.",
    },
    {
      name:
        language === "ESP"
          ? "Provisión y operación de equipos pesados y livianos"
          : "HEAVY AND LIGHT EQUIPMENT PROVISION AND OPERATION SERVICE",
      icon: provisionEquipos,
      background: bgProvision,
      text:
        language === "ESP"
          ? "Servicio de provisión y operación de equipos pesados y livianos en todas las etapas (exploración, construcción, operación) y sectores e instalaciones de los proyectos mineros (procesos, mina, operativo invierno), con operarios altamente capacitados para trabajos en mina."
          : "Provision and operation of heavy and light equipment across all project stages (Exploration, Construction, Operation) and throughout the different areas and facilities of mining projects (Process Plants, Mine Operations, Winter Operations). We provide highly trained, certified operators specialized in on-site mining work.",
    },
  ];
  const mobile = useMediaQuery("screen and (max-width:768px)");
  return (
    <div className="bg-white py-10 md:py-10 mt-5 md:mt-10">
      <div className="container mb-10 max-w-[1280px] px-8 xl:px-0">
        <div className="flex flex-row items-center relative">
          <div className="absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]" />
          <h2 className="font-bold uppercase text-sm md:text-lg">
            {language === "ESP" ? (
              <>Servicios de infraestructura para la industria minera</>
            ) : (
              <>INFRASTRUCTURE SERVICES FOR THE MINING INDUSTRY</>
            )}
          </h2>
        </div>
      </div>
      <div
        className={cn("flex flex-wrap justify-center", mobile && "flex-col")}
      >
        {items.map((item, index) => {
          return (
            <ServiciosCard
              name={item.name}
              icon={item.icon}
              background={item.background}
              text={item.text}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

type CardProps = {
  name: string;
  icon: StaticImageData;
  background: StaticImageData;
  text: string;
};

export function ServiciosCard({ name, icon, background, text }: CardProps) {
  return (
    <div className="relative flex justify-center flex-1 mix-w-[400px]">
      <Image
        src={background}
        alt="fondo"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="flex flex-col items-center p-4 py-20 bg-black/10 min-w-[300px] h-full z-10">
        <Image src={icon} alt="icon" width={85} height={85} />
        <h4 className="text-white font-bold text-sm md:text-lg text-center uppercase mt-2">
          {name}
        </h4>
        <p className="text-white font-normal text-sm md:text-lg text-center mt-2">
          {text}
        </p>
      </div>
    </div>
  );
}
