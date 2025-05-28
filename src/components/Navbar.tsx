"use client";

import React, { useState } from "react";
import Image from "next/image";
import logoNavbar from "@/assets/logoMapal.svg";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LayoutContext";

const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
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
    if (pathname !== "/") {
      router.push(`/#${id}`);
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
        <a
          className="flex-shrink-0"
          onClick={() => scrollToTop()}
          href={pathname !== "/" ? "/" : undefined}
        >
          <Image
            src={logoNavbar}
            alt="Logo"
            height={40}
            className="cursor-pointer"
          />
        </a>
        <div className="md:hidden ml-auto mr-4">
          <div onClick={handleMenuToggle} className="text-white cursor-pointer">
            ☰
          </div>
        </div>

        <div className={"hidden md:block md:space-x-6 ml-auto"}>
          <a
            href={pathname !== "/" ? "/#empresa" : undefined}
            onClick={() => scrollTo("empresa")}
            className="text-white font-medium text-sm hover:text-gray-300 cursor-pointer"
          >
            {language === "ESP" ? <>LA EMPRESA</> : <>COMPANY</>}
          </a>
          <a
            href={pathname !== "/" ? "/#prensa" : undefined}
            onClick={() => scrollTo("prensa")}
            className="text-white font-medium text-sm hover:text-gray-300 cursor-pointer"
          >
            {language === "ESP" ? <>PRENSA</> : <>PRESS</>}
          </a>
          <a
            href="/proyectos"
            className="text-white font-medium text-sm hover:text-gray-300 cursor-pointer"
          >
            {language === "ESP" ? <>OBRAS</> : <>PROJECTS</>}
          </a>
          <a
            href="/mapalsigma"
            className="text-white font-medium text-sm hover:text-gray-300 cursor-pointer"
          >
            {language === "ESP" ? <>MINERIA</> : <>MINING</>}
          </a>
          <a
            className="text-white font-medium text-sm hover:text-gray-300 cursor-pointer"
            href="/contacto/rrhh"
          >
            {language === "ESP" ? <>CONTACTO</> : <>CONTACT</>}
          </a>
          <button
            onClick={toggleLanguage}
            className="text-white font-medium text-sm hover:text-gray-300 cursor-pointer"
          >
            {language === "ESP" ? (
              <span>
                <span className="underline">ESP /</span> ING
              </span>
            ) : (
              <span>
                ESP / <span className="underline">ING</span>
              </span>
            )}
          </button>
        </div>

        <div className="md:hidden">
          {menuOpen && (
            <div className="absolute right-0 top-16 w-full bg-gray-800">
              <a
                href={pathname !== "/" ? "/#empresa" : undefined}
                onClick={() => {
                  scrollTo("empresa"), setMenuOpen((o) => !o);
                }}
                className="text-white text-sm hover:text-gray-300 block py-3 pl-4"
              >
                {language === "ESP" ? <>LA EMPRESA</> : <>COMPANY</>}
              </a>
              <a
                href={pathname !== "/" ? "/#prensa" : undefined}
                onClick={() => {
                  scrollTo("prensa"), setMenuOpen((o) => !o);
                }}
                className="text-white text-sm hover:text-gray-300 block py-3 pl-4"
              >
                {language === "ESP" ? <>PRENSA</> : <>PRESS</>}
              </a>
              <a
                href="/proyectos"
                onClick={() => {
                  setMenuOpen((o) => !o);
                }}
                className="text-white text-sm hover:text-gray-300 block py-3 pl-4"
              >
                {language === "ESP" ? <>OBRAS</> : <>WORKS</>}
              </a>
              <a
                href="/mapalsigma"
                onClick={() => {
                  setMenuOpen((o) => !o);
                }}
                className="text-white text-sm hover:text-gray-300 block py-3 pl-4"
              >
                {language === "ESP" ? <>MINERIA</> : <>MINING</>}
              </a>
              <a
                className="text-white text-sm hover:text-gray-300 block py-3 pl-4"
                onClick={() => {
                  scrollToBottom(), setMenuOpen((o) => !o);
                }}
              >
                {language === "ESP" ? <>CONTACTO</> : <>CONTACT</>}
              </a>
              <button
                onClick={() => {
                  toggleLanguage();
                  setMenuOpen((o) => !o);
                }}
                className="text-white text-sm hover:text-gray-300 block py-3 pl-4"
              >
                {language === "ESP" ? (
                  <span>
                    <span className="underline">ESP/</span>ING
                  </span>
                ) : (
                  <span>
                    ESP/ <span className="underline">ING</span>
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
