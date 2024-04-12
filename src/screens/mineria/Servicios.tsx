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

const items = [
  {
    name: "Construcción de puentes",
    icon: construccionPuente,
    background: bgConstruccion,
    text: "Diseño, planificación y ejecución de puentes, sobre ríos, carreteras y terrenos difíciles. La importancia de este servicio radica en su capacidad para mejorar la conectividad y facilitar el transporte, abriendo nuevas vías de comunicación y acceso",
  },
  {
    name: "Movimiento de Suelos",
    icon: movimientoSuelos,
    background: bgMovimiento,
    text: "Movimientos de suelos, excavaciones, transporte desde cantera, relleno, compactación y perfilado, instalación de geomembrana, geotextiles y tuberías, entre otras actividades, como construcción de valles de lixiviación",
  },
  {
    name: "Obras viales minería",
    icon: obrasViales,
    background: bgObras,
    text: "Servicios de apertura, mantenimiento, reparación de caminos mineros, despeje de nieve y/o hielo, estabilización y reparación de los taludes laterales del camino, construcción y/o reemplazo de bermas de seguridad, construcción y/o mantenimiento de rampas de escape para salidas de emergencia, limpieza y remoción de material producto de grandes deslizamientos, derrumbes, avalanchas y/o crecientes.",
  },
  {
    name: "Construcción de naves industriales",
    icon: construccionNaves,
    background: bgNaves,
    text: "Brindamos soluciones integrales que impulsan el desarrollo de la minería, realizando obras de soporte fundamentales para la sostenibilidad de la misma, tales como naves industriales para diversos usos dentro de los proyectos mineros.",
  },
  {
    name: "Provisión y operación de equipos pesados",
    icon: provisionEquipos,
    background: bgProvision,
    text: "Servicio de Provisión y Operación de Equipos Pesados en todas las etapas (Exploración, Construcción, Operación) y sectores e instalaciones de los proyectos mineros (Procesos, Mina, Operativo Invierno), con operarios altamente capacitados para trabajos en mina.",
  },
];

export default function Servicios() {
  return (
    <div className="bg-white py-[40px] mt-[34px]">
      <div className="container mx-auto mb-[34px]">
        <h3 className="uppercase font-bold text-[15px]">
          Servicios de infraestructura para la industria minera
        </h3>
      </div>
      <div className="grid grid-cols-5 ">
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
    <div className="w-full min-h-[650px] relative flex justify-center ">
      <Image src={background} alt="fondo" fill className="object-cover" />
      <div className="flex flex-col justify-center px-[40px] py-[55px] gap-[10px] absolute items-center ">
        <Image src={icon} alt="icon" width={85} />
        <h4 className="text-white font-bold text-[15px] text-center uppercase">
          {name}
        </h4>
        <p className="text-white font-normal text-[15px] text-center">{text}</p>
      </div>
    </div>
  );
}
