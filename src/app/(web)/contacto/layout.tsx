"use client";

import { useLanguage } from "@/context/LayoutContext";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Fondo from "@/assets/cambios2025/fotos/PortadaContacto-min.jpg";
import Link from "next/link";
import Ubicacion from "@/assets/cambios2025/Ubicacion.png";

export const dynamic = "force-static";

export default function ContactoPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen w-[100%] overflow-hidden">
      <div className="h-[300px] md:h-[600px] w-[100%] relative flex justify-center">
        <div className="w-full h-full container mx-auto absolute z-30 flex items-center justify-center md:justify-start">
          <p className="uppercase text-[38px] md:text-[64px] z-30 absolute text-white font-semibold">
            {language === "ESP" ? <>Contacto</> : <>Contact</>}
          </p>
        </div>
        <div className="bg-black w-full h-full opacity-30 absolute z-20"></div>
        <Image src={Fondo} alt="fondo contacto" fill className="object-cover" />
      </div>
      <div className="container sm:px-0 mx-auto py-[40px] relative max-w-[1280px] flex flex-col">
        <div className="flex flex-row items-center relative">
          <div className="absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]" />
          <p className="uppercase font-bold text-[18px]">
            {language === "ESP" ? <>TRABAJA CON NOSOTROS</> : <>WORK WITH US</>}
          </p>
        </div>
        <div className="my-8 flex flex-row items-start">
          <Sidebar />
          <div className="ml-16 mt-2 w-full">{children}</div>
        </div>
      </div>
      <div className="container sm:px-0 mx-auto py-[40px] relative max-w-[1280px] flex flex-col">
        <div className="flex flex-row items-center relative mb-12">
          <div className="absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]" />
          <p className="uppercase font-bold text-[18px]">
            {language === "ESP" ? <>NESTRAS OFICINAS</> : <>OUR OFFICES</>}
          </p>
        </div>
        <div className="flex flex-row items-start w-full">
          <div className="md:border-[#FDBA13] md:ml-4 pb-4 md:border items-center rounded-sm w-[400px]">
            <a
              href="https://www.google.com.ar/maps/place/MAPAL+SACIA/@-31.5048021,-68.5269609,18.11z/data=!4m6!3m5!1s0x968141e014abe173:0xef3a1ac0e6709a3!8m2!3d-31.5047294!4d-68.5260301!16s%2Fg%2F11bzwrpyfl?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Ubicacion}
                alt=""
                className="md:-ml-4 md:-mt-4 rounded-sm object-cover object-center max-w-[400px]"
              />
            </a>
          </div>
          <div className="ml-16">
            <h3 className="font-semibold">Dirección:</h3>
            <a
              href="https://maps.app.goo.gl/NXApWAEXYZQuyXQk8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mt-2 ml-2">
                Tucumán Norte 523, CP 5413 Chimbas, San Juan.
              </p>
            </a>
            <h3 className="font-semibold mt-4">Teléfonos:</h3>
            <p className="mt-2 ml-2">(+54) 264 4313310</p>
            <p className="mt-1 ml-2">(+54) 264 4313355</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Sidebar = () => {
  const path = usePathname();
  const { language } = useLanguage();
  return (
    <div className="flex flex-col">
      <nav className="flex flex-col min-w-[180px] h-full bg-white p-4 space-y-2">
        <Link
          href="/contacto/rrhh"
          className={cn(
            "hover:bg-gray-100 py-2 px-4 rounded shrink-0 min-w-[180px] w-full",
            path === "/contacto/rrhh" && "bg-[#ffc32d] py-2 px-4 rounded"
          )}
        >
          {language === "ESP" ? <>Recursos humanos</> : <>Careers</>}
        </Link>
        <Link
          href="/contacto/comercial"
          className={cn(
            "hover:bg-gray-100 py-2 px-4 rounded shrink-0 min-w-[180px] w-full",
            path === "/contacto/comercial" && "bg-[#ffc32d] py-2 px-4 rounded"
          )}
        >
          {language === "ESP" ? <>Comercial</> : <>Commercial Inquiries</>}
        </Link>
        <Link
          href="/contacto/proveedores"
          className={cn(
            "hover:bg-gray-100 py-2 px-4 rounded shrink-0 min-w-[180px] w-full",
            path === "/contacto/proveedores" && "bg-[#ffc32d] py-2 px-4 rounded"
          )}
        >
          {language === "ESP" ? <>Proveedores</> : <>Suppliers</>}
        </Link>
      </nav>
    </div>
  );
};
