"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import logoNavbar from "@/assets/logoMapal.svg";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = (id: string) => {
    // const yOffset = -90;

    if (pathname !== "/") {
      router.push("/#company");
    } else {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "bg-gradient-to-b from-black/60 to-transparent pt-4 pb-12 px-6 md:px-16 lg:px-32 xl:px-48 fixed w-full top-0 z-50 ",
        menuOpen && "bg-black"
      )}
    >
      <div className="flex items-center justify-between">
        <a className="flex-shrink-0" onClick={() => scrollToTop()} href="/">
          <Image
            src={logoNavbar}
            alt="Logo"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </a>
        <div className="md:hidden ml-auto mr-4">
          <div onClick={handleMenuToggle} className="text-white cursor-pointer">
            ☰
          </div>
        </div>

        <div className={" hidden  md:block md:space-x-6 ml-auto"}>
          <a
            href={pathname !== "/" ? "/#empresa" : undefined}
            onClick={() => scrollTo("empresa")}
            className="text-white font-medium text-xs hover:text-gray-300 cursor-pointer"
          >
            LA EMPRESA
          </a>
          <a
            id="Historia"
            className="text-white font-medium text-xs hover:text-gray-300 cursor-pointer"
          >
            PRENSA
          </a>
          <a
            href="/proyectos"
            className="text-white font-medium text-xs hover:text-gray-300 cursor-pointer"
          >
            PROYECTOS
          </a>
          <a
            href="/mineria"
            className="text-white font-medium text-xs hover:text-gray-300 cursor-pointer"
          >
            MINERIA
          </a>
          {/* <a
            href="/mineria#Equipamiento"
            className="text-white font-medium text-xs hover:text-gray-300 cursor-pointer"
          >
            EQUIPAMIENTO
          </a> */}
          <a
            className="text-white font-medium text-xs hover:text-gray-300 cursor-pointer"
            onClick={() => scrollToBottom()}
          >
            CONTACTO
          </a>
          <a
            href="#"
            className="text-white font-medium text-xs hover:text-gray-300 cursor-pointer"
          >
            ING/ESP
          </a>
        </div>

        <div className="md:hidden">
          {menuOpen && (
            <div className="absolute right-0 top-16 w-full bg-gray-800">
              <a
                href="/#Empresa"
                className="text-white  text-xs hover:text-gray-300 block py-2"
              >
                LA EMPRESA
              </a>
              <a
                href="/#Historia"
                className="text-white text-xs hover:text-gray-300 block py-2"
              >
                PRENSA
              </a>
              <a
                href="#"
                className="text-white text-xs hover:text-gray-300 block py-2"
              >
                PROYECTOS
              </a>
              <a
                href="mineria"
                className="text-white  text-xs hover:text-gray-300 block py-2"
              >
                MINERIA
              </a>
              {/* <a
                href="/mineria#Equipamiento"
                className="text-white text-xs hover:text-gray-300 block py-2"
              >
                EQUIPAMIENTO
              </a> */}
              <a
                className="text-white text-xs hover:text-gray-300 block py-2"
                onClick={() => scrollToBottom()}
              >
                CONTACTO
              </a>
              <a
                href="#"
                className="text-white text-xs hover:text-gray-300 block py-2"
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
