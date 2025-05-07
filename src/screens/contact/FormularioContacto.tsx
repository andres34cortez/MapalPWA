"use client";

import React from "react";

const FormularioContacto = () => {
  return (
    <div className="container sm:px-0 mx-auto py-[40px] relative max-w-[1280px]">
      <Formulario />
    </div>
  );
};

export default FormularioContacto;

const Formulario = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row items-center relative">
        <p className="uppercase font-bold text-[18px]">Formulario</p>
      </div>
    </div>
  );
};
