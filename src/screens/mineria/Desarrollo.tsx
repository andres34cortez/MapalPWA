import Image from "next/image";
import group01 from "../../assets/mineriaPage/group01.png";
import group02 from "../../assets/mineriaPage/group02.png";
import group03 from "../../assets/mineriaPage/group03.png";
import map from "../../assets/mineriaPage/map.png";

export default function Desarrollo() {
  return (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 my-8 md:my-12 lg:my-16">
      <h3 className="uppercase font-bold text-sm md:text-lg">
        Desarrollo, proveedores y comunidades
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
        <div className="border-r-2 border-r-[#C8C8C8] pr-4">
          <p className="font-light text-sm md:text-lg max-w-md">
            Desde MAPAL SIGMA promovemos la integración con las comunidades, con
            dedicación y espíritu de servicio, actuando con compromiso y
            responsabilidad. Provocamos un desarrollo genuino a través de cursos
            y capacitaciones con trabajadores locales. También, desarrollamos
            proveedores y contratistas de la región, colaborando con
            instituciones como hospitales, escuelas, barrios y obras de
            urgencia. Tenemos el compromiso de proteger el medio ambiente, la
            salud y la seguridad de los empleados, clientes, contratistas, y
            público en general, cumpliendo las leyes y requerimientos en materia
            ambiental, de salud y seguridad en todos los lugares en los que
            operamos. Promovemos una cultura que fomente la responsabilidad
            personal de cada colaborador propio y de nuestros proveedores,
            contando con el compromiso de todos.
          </p>
        </div>
        <div className="grid grid-cols-3 md:col-span-2 px-4 md:px-0 pb-4 md:pb-0">
          <div className="relative aspect-w-4 aspect-h-3">
            <Image
              src={group01}
              alt="Foto grupo 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative aspect-w-4 aspect-h-3">
            <Image
              src={group02}
              alt="Foto grupo 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative aspect-w-4 aspect-h-3">
            <Image
              src={group03}
              alt="Foto grupo 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="border-r-2 border-r-[#C8C8C8] flex flex-col gap-6 pb-6">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase font-bold text-[#FDBA13] text-sm md:text-lg">
              Regionalidad
            </h4>
            <p className="font-light text-sm md:text-lg max-w-md">
              MAPAL SIGMA es una empresa constructora que trabaja con clientes
              privados y públicos en toda la Argentina de manera transparente y
              honesta. Damos estricto cumplimiento a las leyes nacionales e
              internacionales vigentes en nuestro país como así también a las
              políticas y procedimientos internos de la compañía desarrolladas
              al efecto.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="uppercase font-bold text-[#FDBA13] text-sm md:text-lg">
              Compliance
            </h4>
            <p className="font-light text-sm md:text-lg max-w-md">
              Trabajamos con los más altos estándares de ética y transparencia,
              es por ello que contamos con un programa de integridad robusto con
              estándares internacionales. Nuestro código de conducta contiene
              los principios bajo los cuales nuestra empresa conduce sus
              negocios. Es el pilar fundamental de nuestro comportamiento
              interno entre los que formamos parte del equipo de trabajo y a su
              vez, en nuestro comportamiento externo hacia nuestros clientes,
              proveedores y comunidad en general.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:col-span-2 gap-4 md:gap-6">
          <h4 className="uppercase font-bold text-[#FDBA13] text-sm md:text-lg">
            Sede operativa Barreal
          </h4>
          <Image src={map} alt="mapa" />
        </div>
      </div>
    </div>
  );
}
