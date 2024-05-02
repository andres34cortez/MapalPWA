'use client'
import React from "react";
import Image from "next/image";
import photo1 from "@/assets/photosBaner/photo1.png";
import photo2 from "@/assets/photosBaner/photo2.png";
import photo3 from "@/assets/photosBaner/photo3.png";
import photo4 from "@/assets/photosBaner/photo4.png";
import photo5 from "@/assets/photosBaner/photo5.png";
import sigma from "@/assets/photosBaner/sigma.png";
import sigmaLogo from "@/assets/photosBaner/SigmaPNG.png";
export default function PhotosHomeBanner() {
  return (
    <div className='overflow-hidden'>
      <div className='flex flex-row'>
        <Image src={photo1} alt=''></Image>
        <Image src={photo2} alt=''></Image>
        <Image src={photo3} alt=''></Image>
        <Image src={photo4} alt=''></Image>
        <Image src={photo5} alt=''></Image>
      </div>
      <div className='relative'>
        <Image src={sigma} className='relative z-10' alt=''></Image>
        <Image
          className='absolute top-[40%] right-[224px] z-20'
          src={sigmaLogo}
          alt=''
        ></Image>
      </div>
    </div>
  );
}
