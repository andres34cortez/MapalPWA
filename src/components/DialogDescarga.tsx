"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useLanguage } from "@/context/LayoutContext";
import Image from "next/image";
import logoMapal from "@/assets/logoMapal.svg";
// import logoSigma from "@/assets/cambios2025/LogoSigma.svg";
import logoMineria from "@/assets/cambios2025/Consorcio.svg";

interface Props {
  children: React.ReactNode;
}

export default function DialogDescarga(props: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="max-w-[480px]">
        <DialogTitle className="mb-3">Descargar Brochure</DialogTitle>
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-col gap-2 w-[200px] items-center justify-between h-full pt-3">
            <Image
              src={logoMapal}
              alt="Logo"
              height={40}
              className="mb-2.5 pt-5"
            />
            <LinkDescargaMapal />
          </div>
          <div className="flex flex-col gap-2 w-[180px]">
            <Image
              src={logoMineria}
              alt="logo Sigma"
              className="h-[100px] w-[180px]  pb-3"
            />
            <LinkDescargaMapalSigma />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const downloadPDFMapal = () => {
  const fileId = "1fY30GYdl9uAcY3IdH9fRRNDgfBbh1vKv";
  const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
  window.open(downloadLink, "_blank");
};

const LinkDescargaMapal = () => {
  const { language } = useLanguage();
  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-[#FAB918] text-white font-semibold text-sm py-1 px-3 rounded-lg hover:bg-[#FDBA13]"
        onClick={downloadPDFMapal}
      >
        {language === "ESP" ? <>Descargar</> : <>Download</>}
      </button>
    </div>
  );
};

const downloadPDFMapalSigma = () => {
  const fileId = "1qeoXjBKBP9tHQ8dymvxG2eTos7ZvEw8p";
  const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
  window.open(downloadLink, "_blank");
};

const LinkDescargaMapalSigma = () => {
  const { language } = useLanguage();
  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-[#FAB918] text-white font-semibold text-sm py-1 px-3 rounded-lg hover:bg-[#FDBA13]"
        onClick={downloadPDFMapalSigma}
      >
        {language === "ESP" ? <>Descargar</> : <>Download</>}
      </button>
    </div>
  );
};
