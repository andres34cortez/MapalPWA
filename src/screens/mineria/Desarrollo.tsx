import Image from "next/image";
import group01 from "../../assets/mineriaPage/group01.png";
import group02 from "../../assets/mineriaPage/group02.png";
import group03 from "../../assets/mineriaPage/group03.png";
import map from "../../assets/mineriaPage/map.png";

export default function Desarrollo() {
  return (
    <div className="flex flex-col gap-[50px] my-[50px]">
      <h3 className="uppercase font-bold text-[15px]">
        Desarrollo, proveedores y comunidades
      </h3>
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="border-r-2 border-r-[#C8C8C8]">
          <p className="font-light text-[15px] max-w-[400px]">
            Desde MAPAL SIGMA promovemos la integración con las comunidades, con
            dedicación y espíritu de servicio, actuando con compromiso y
            responsabilidad. Provocamos un desarrollo genuino a través de cursos
            y capacitaciones con trabajadores locales. También, desarrollamos
            proveedores y contratistas de la región, colaborando con
            instituciones como hospitales, escuelas, barrios y obras de
            urgencia. Tenemos el compromiso de proteger el medio ambiente, la
            salud y la seguridad de los empleados, clientes, contratistas, y
            publico general, cumpliendo las leyes y requerimientos en materia
            ambiental, de salud y seguridad en todos los lugares en los que
            operamos. Promovemos una cultura que fomente la responsabilidad
            personal de cada colaborador propio y de nuestros proveedores,
            contando con el compromiso de todos.
          </p>
        </div>
        <div className="grid grid-cols-3 col-span-2 px-[65px] pb-[70px]">
          <div className="relative">
            <Image
              src={group01}
              alt="Foto grupo 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={group02}
              alt="Foto grupo 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={group03}
              alt="Foto grupo 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="border-r-2 border-r-[#C8C8C8] flex flex-col gap-[25px] pb-[25px]">
          <div className="flex flex-col gap-[20px]">
            <h4 className="uppercase font-bold text-[#FDBA13] text-[15px]">
              Regionalidad
            </h4>
            <p className="font-light text-[15px] max-w-[400px]">
              MAPAL SIGMA es una empresa constructora que trabaja con clientes
              privados y públicos en toda la Argentina de manera transparente y
              honesta. Damos estricto cumplimiento a las leyes nacionales e
              internacionales vigentes en nuestro país como así también a las
              políticas y procedimientos internos de la compañía desarrolladas
              al efecto.
            </p>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h4 className="uppercase font-bold text-[#FDBA13] text-[15px]">
              Compliance
            </h4>
            <p className="font-light text-[15px] max-w-[400px]">
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
        <div className="flex flex-col col-span-2 px-[65px] gap-[20px]">
          <h4 className="uppercase font-bold text-[#FDBA13] text-[15px]">
            Sede operativa Barreal
          </h4>
          <Image src={map} alt="mapa" />
        </div>
      </div>
    </div>
  );
}
