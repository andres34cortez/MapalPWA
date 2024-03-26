"use client";
import React, { useState } from "react";
import Image from "next/image";

import logoNavbar from "@/assets/logoMapal.svg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-black/60 to-transparent pt-4 pb-12 px-6 md:px-16 lg:px-32 xl:px-48 fixed w-full top-0 z-50  ">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Image src={logoNavbar} alt="Logo" width={120} height={40} />
        </div>
        <div className="md:hidden ml-auto mr-4">
          <div onClick={handleMenuToggle} className="text-white cursor-pointer">
            ☰
          </div>
        </div>

        <div className={" hidden  md:block md:space-x-6 ml-auto"}>
          <a
            href="/"
            className="text-white font-medium text-xs hover:text-gray-300"
          >
            LA EMPRESA
          </a>
          <a
            href="#"
            className="text-white disabled font-medium text-xs hover:text-gray-300"
          >
            PRENSA
          </a>
          <a
            href="#"
            className="text-white disabled font-medium text-xs hover:text-gray-300"
          >
            PROYECTOS
          </a>
          <a
            href="/mineria"
            className="text-white disabled font-medium text-xs hover:text-gray-300"
          >
            MINERIA
          </a>
          <a
            href="#"
            className="text-white disabled font-medium text-xs hover:text-gray-300"
          >
            EQUIPAMIENTO
          </a>
          <a
            href="#"
            className="text-white disabled font-medium text-xs hover:text-gray-300"
          >
            CONTACTO
          </a>
          <a
            href="#"
            className="text-white disabled font-medium text-xs hover:text-gray-300"
          >
            ING/ESP
          </a>
        </div>

        <div className="md:hidden">
          {menuOpen && (
            <div className="absolute right-0 top-16 w-full bg-gray-800">
              <a
                href="/"
                className="text-white  text-xs hover:text-gray-300 block py-2"
              >
                LA EMPRESA
              </a>
              <a
                href="#"
                className="text-white disabled text-xs hover:text-gray-300 block py-2"
              >
                PRENSA
              </a>
              <a
                href="#"
                className="text-white disabled text-xs hover:text-gray-300 block py-2"
              >
                PROYECTOS
              </a>
              <a
                href="mineria"
                className="text-white  text-xs hover:text-gray-300 block py-2"
              >
                MINERIA
              </a>
              <a
                href="#"
                className="text-white disabled text-xs hover:text-gray-300 block py-2"
              >
                EQUIPAMIENTO
              </a>
              <a
                href="#"
                className="text-white disabled text-xs hover:text-gray-300 block py-2"
              >
                CONTACTO
              </a>
              <a
                href="#"
                className="text-white disabled text-xs hover:text-gray-300 block py-2"
              >
                ING/ESP
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
