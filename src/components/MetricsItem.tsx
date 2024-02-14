import Image from "next/image";
import React from "react";

interface MetricsItemProps {
  image?: any;
  tprimary?: string;
  tsecondary?: string;
}

const MetricsItem: React.FC<MetricsItemProps> = ({
  image,
  tprimary,
  tsecondary,
}) => {
  return (
    <div className='text-center'>
      <div className='mx-auto flex items-center  gap-2 mt-2 max-w-12'>
        {image && <Image src={image} alt='' />}
        <h3 className='text-xl font-bold'>{tprimary}</h3>
      </div>
      <div>
        <h3 className='pl-12 text-sm text-gray-600'>{tsecondary}</h3>
      </div>
    </div>
  );
};

export default MetricsItem;
