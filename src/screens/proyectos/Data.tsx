import Image from "next/image";
import Viviendas from "@/assets/houseMetrics.png";
import Naves from "@/assets/naves.png";
import Departamentos from "@/assets/departamentos.png";
import Civiles from "@/assets/civiles.png";
export default function Data() {
  return (
    <div className='w-screen md:w-[800px] grid grid-cols-2 md:grid-cols-4 items-center gap-[35px] mx-auto p-[30px]'>
      <div className='flex flex-col  items-start justify-start'>
        <div className='flex items-center gap-2 justify-start mb-2 '>
          <Image src={Viviendas} alt='' className='w-8 h-8' />
          <h3 className='text-xl font-medium'>4.088</h3>
        </div>
        <h3 className='text-sm text-gray-600 text-left'>
          Viviendas de Barrios Construidas.-
        </h3>
      </div>
      <div className='flex flex-col  items-start justify-start  mb-2 '>
        <div className='flex items-center gap-2'>
          <Image src={Departamentos} alt='' className='w-8 h-8' />
          <h3 className='text-xl font-medium'>550</h3>
        </div>
        <h3 className='text-sm text-gray-600 text-left'>
          {" "}
          Departamentos en Edificios en Altura Realizados.-
        </h3>
      </div>
      <div className='flex flex-col  items-start justify-start  mb-2'>
        <div className='flex items-center gap-2 mb-3'>
          <Image src={Naves} alt='' className='w-8 h-8' />
          <h3 className='text-xl font-medium'>16</h3>
        </div>
        <h3 className='text-sm text-gray-600 text-left'>
          Naves industriales Contruidas
        </h3>
      </div>
      <div className='flex flex-col  items-start justify-start  mb-2'>
        <div className='flex items-center gap-2 mb-3'>
          <Image src={Civiles} alt='' className='w-8 h-8' />
          <h3 className='text-xl font-medium'>285.201</h3>
        </div>
        <h3 className='text-sm text-gray-600 text-left'>
          M2 De Construcciones Civiles Realizadas
        </h3>
      </div>
    </div>
  );
}
