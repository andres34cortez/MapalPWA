"use client";
import Image from "next/image";
import group01 from "../../assets/mineriaPage/group01.png";
import group02 from "../../assets/mineriaPage/group02.png";
import group03 from "../../assets/mineriaPage/group03.png";
import map from "../../assets/mineriaPage/map.png";
import { useLanguage } from "@/context/LayoutContext";

export default function Desarrollo() {
  const { language } = useLanguage();
  return (
    <div className="container sm:p-0 gap-8 my-8 md:my-12">
      <div className="flex flex-row items-center relative mb-6 xl:mb-2 xl:px-0 sm:px-8">
        <div className="absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]" />
        <h2 className="font-bold uppercase text-sm md:text-lg">
          {language === "ESP" ? (
            <>Desarrollo, proveedores y comunidades</>
          ) : (
            <>COMMUNITY, VENDORS AND DEVELOPMENT</>
          )}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row xl:px-0 sm:px-8 xl:flex-nowrap">
        <div className="flex flex-col max-w-[465px] w-full">
          <div className="pr-4">
            <p className="font-light text-sm max-w-md md:text-base">
              {language === "ESP" ? (
                <>
                  Desde MAPAL SIGMA promovemos la integración con las
                  comunidades, con dedicación y espíritu de servicio, actuando
                  con compromiso y responsabilidad. Provocamos un desarrollo
                  genuino a través de cursos y capacitaciones con trabajadores
                  locales. También, desarrollamos proveedores y contratistas de
                  la región, colaborando con instituciones como hospitales,
                  escuelas, barrios y obras de urgencia. Tenemos el compromiso
                  de proteger el medio ambiente, la salud y la seguridad de los
                  empleados, clientes, contratistas, y público en general,
                  cumpliendo las leyes y requerimientos en materia ambiental, de
                  salud y seguridad en todos los lugares en los que operamos.
                  Promovemos una cultura que fomente la responsabilidad personal
                  de cada colaborador propio y de nuestros proveedores, contando
                  con el compromiso de todos.
                </>
              ) : (
                <>
                  At MAPAL SIGMA, we foster integration with local communities
                  through dedication and a spirit of service, acting with
                  commitment and responsibility. We drive genuine development by
                  offering courses and training programs for local workers.
                  Additionally, we develop regional suppliers and contractors,
                  and collaborate with institutions such as hospitals, schools,
                  neighborhoods, and emergency infrastructure projects. We are
                  firmly committed to protecting the environment, health, and
                  safety of our employees, clients, contractors, and the general
                  public, ensuring full compliance with all applicable
                  environmental, health, and safety regulations wherever we
                  operate. We promote a culture of personal responsibility among
                  our team members and suppliers, relying on the commitment of
                  all involved.
                </>
              )}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-12">
            <h4 className="uppercase font-bold text-[#FDBA13] text-sm md:text-lg">
              {language === "ESP" ? <> Regionalidad</> : <>REGIONAL APPROACH</>}
            </h4>
            <p className="font-light text-sm md:text-base max-w-md">
              {language === "ESP" ? (
                <>
                  MAPAL SIGMA es una empresa constructora que trabaja con
                  clientes privados y públicos en toda la Argentina de manera
                  transparente y honesta. Damos estricto cumplimiento a las
                  leyes nacionales e internacionales vigentes en nuestro país
                  como así también a las políticas y procedimientos internos de
                  la compañía desarrolladas al efecto.
                </>
              ) : (
                <>
                  MAPAL SIGMA is a construction company working with both
                  private and public clients across Argentina with transparency
                  and integrity. We strictly comply with all national and
                  international laws in force within the country, as well as the
                  internal policies and procedures developed specifically for
                  this purpose.
                </>
              )}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <h4 className="uppercase font-bold text-[#FDBA13] text-sm md:text-lg">
              {language === "ESP" ? <> Cumplimiento</> : <>COMPLIANCE</>}
            </h4>
            <p className="font-light text-sm md:text-base max-w-md">
              {language === "ESP" ? (
                <>
                  Trabajamos con los más altos estándares de ética y
                  transparencia, es por ello que contamos con un programa de
                  integridad robusto con estándares internacionales. Nuestro
                  código de conducta contiene los principios bajo los cuales
                  nuestra empresa conduce sus negocios. Es el pilar fundamental
                  de nuestro comportamiento interno entre los que formamos parte
                  del equipo de trabajo y a su vez, en nuestro comportamiento
                  externo hacia nuestros clientes, proveedores y comunidad en
                  general.
                </>
              ) : (
                <>
                  We operate under the highest standards of ethics and
                  transparency, supported by a comprehensive integrity program
                  aligned with international standards. Our Code of Conduct
                  outlines the principles that guide the way we do business. It
                  is the foundation of our internal conduct as a team and of our
                  external relationships with clients, suppliers, and the
                  broader community.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="w-0.5 bg-[#C8C8C8] min-h-full mx-5 hidden xl:flex" />
        <div className="flex flex-col max-w-[500px] xl:max-w-[750px] lg:w-auto">
          <div className="flex flex-row mt-6">
            <Image
              src={group01}
              alt="Foto grupo 1"
              className="object-center object-cover max-w-[257px] w-full hidden md:flex lg:max-w-[250px]"
            />
            <Image
              src={group02}
              alt="Foto grupo 2"
              className="object-cover object-center max-w-[257px] w-full hidden md:flex lg:max-w-[250px]"
            />
            <Image
              src={group03}
              alt="Foto grupo 3"
              className="object-cover object-center max-w-[257px] w-full hidden xl:flex lg:max-w-[250px]"
            />
          </div>
          <div className="flex flex-col md:col-span-2 gap-4 md:gap-6 sm:mt-8 md:mt-12">
            {language === "ESP" ? (
              <h4 className="uppercase font-bold text-[#FDBA13] text-sm md:text-lg">
                Sede operativa Barreal
              </h4>
            ) : (
              <h4 className="uppercase font-bold text-[#FDBA13] text-sm md:text-lg">
                Barreal operational headquarters
              </h4>
            )}
            <Image src={map} alt="mapa" />
          </div>
        </div>
      </div>
    </div>
  );
}
