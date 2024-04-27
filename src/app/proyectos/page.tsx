import Data from "@/screens/proyectos/Data";
import Image, { StaticImageData } from "next/image";
import Fondo from "../../assets/proyectosPage/ProyectosBanner.png";
import Banner from "@/screens/proyectos/Banner";
import Proyectos from "@/screens/proyectos/Proyectos";

export default function ProyectosPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { tipo } = searchParams;
  return (
    <div className="min-h-screen">
      <div className="h-[600px] w-[100%] relative flex justify-center">
        <div className="w-full h-full container mx-auto absolute z-30 flex items-center">
          <p className="uppercase text-[64px] z-20 absolute text-white">
            Obras y Proyectos
          </p>
        </div>
        <Image
          src={Fondo}
          alt="fondo proyectos"
          fill
          className="object-cover"
        />
      </div>

      <Data />
      <Banner />
      <Proyectos tipo={(tipo || "viales") as string} />
    </div>
  );
}
