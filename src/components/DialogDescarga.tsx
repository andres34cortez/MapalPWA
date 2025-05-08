"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useLanguage } from "@/context/LayoutContext";
import Image from "next/image";
import logoMapal from "@/assets/logoMapal.svg";
import logoSigma from "@/assets/cambios2025/LogoSigma.svg";

interface Props {
  children: React.ReactNode;
}

export default function DialogDescarga(props: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="min-w-[600px]">
        <DialogTitle className="mb-3">Descargar Brochure</DialogTitle>
        <div className="flex flex-row items-start gap-6">
          <div className="flex flex-col gap-2 w-[250px] items-center pt-3">
            <Image src={logoMapal} alt="Logo" height={40} className="mb-2.5" />
            <LinkDescargaMapal />
          </div>
          <div className="flex flex-col gap-2 w-[250px]">
            <Image src={logoSigma} alt="logo Sigma" className="-my-10" />
            <LinkDescargaMapal />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const downloadPDFMapal = () => {
  const fileId = "1GMhT0Ufx3mhok4-NpMeNStYwb5LzBnkq";
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
