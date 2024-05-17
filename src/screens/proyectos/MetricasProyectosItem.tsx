"use client";
import Image from "next/image";
import React from "react";

interface MetricsItemProps {
  image?: any;
  tprimary?: string;
  children?: React.ReactNode;
}

const MetricsItemProytectos: React.FC<MetricsItemProps> = ({
  image,
  tprimary,
  children,
}) => {
  return (
    <div className='flex flex-col items-start justify-start'>
      <div className='flex items-center gap-2 mb-3'>
        {image && <Image src={image} alt='' className='w-7 h-7' />}
        <h3 className='text-2xl font-medium'>{tprimary}</h3>
      </div>
      <h3 className='text-sm text-gray-600 text-left'>{children}</h3>
    </div>
  );
};

export default MetricsItemProytectos;
