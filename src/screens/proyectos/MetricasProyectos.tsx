"use client";
import React from "react";

import Viviendas from "@/assets/houseMetrics.png";
import Naves from "@/assets/naves.png";
import Departamentos from "@/assets/departamentos.png";
import Civiles from "@/assets/civiles.png";
import MetricsItemProytectos from "./MetricasProyectosItem";
import { useLanguage } from "@/context/LayoutContext";

export default function MetricasProyectos() {
  const { language } = useLanguage();
  return (
    <div className='flex flex-wrap md:justify-center gap-14 px-8 pb-4 pt-6 items-start'>
      <MetricsItemProytectos image={Viviendas} tprimary='4088'>
        {language === "ESP" ? (
          <>Viviendas de barrios, Construidas.-</>
        ) : (
          <>Neighborhood homes built.-</>
        )}
      </MetricsItemProytectos>
      <MetricsItemProytectos image={Departamentos} tprimary='550'>
        {language === "ESP" ? (
          <>
            Departamentos En Edificios En Altura
            <br />
            Realizados.-
          </>
        ) : (
          <>Apartments In High-rise Buildings  Done</>
        )}
      </MetricsItemProytectos>
      <MetricsItemProytectos image={Naves} tprimary='285K'>
        {language === "ESP" ? <> Naves Industriales Construidas.-</> : <>Built Industrial Warehouses</>}
      </MetricsItemProytectos>
      <MetricsItemProytectos image={Civiles} tprimary='4.8M'>
        {language === "ESP" ? (
          <>
            {" "}
            M2 de Construcciones Civiles
            <br />
            Realizadas.-
          </>
        ) : (
          <>M2 of Civil Constructions Made</>
        )}
      </MetricsItemProytectos>
    </div>
  );
}
