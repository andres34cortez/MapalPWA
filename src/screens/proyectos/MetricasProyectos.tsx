"use client";
import React from "react";

import Viviendas from "@/assets/houseMetrics.png";
import Naves from "@/assets/naves.png";
import Departamentos from "@/assets/departamentos.png";
import Civiles from "@/assets/civiles.png";
import MetricsItemProytectos from "./MetricasProyectosItem";

export default function MetricasProyectos() {
  return (
    <div className='flex flex-wrap md:justify-center gap-14 px-8 pb-4 pt-6 items-start'>
      <MetricsItemProytectos image={Viviendas} tprimary='4088'>
        Viviendas de barrios, Construidas.-
      </MetricsItemProytectos>
      <MetricsItemProytectos image={Departamentos} tprimary='550'>
        Departamentos En Edificios En Altura
        <br />
        Realizados.-
      </MetricsItemProytectos>
      <MetricsItemProytectos image={Naves} tprimary='285K'>
        Naves Industriales Construidas.-
      </MetricsItemProytectos>
      <MetricsItemProytectos image={Civiles} tprimary='4.8M'>
        M2 de Construcciones Civiles
        <br />
        Realizadas.-
      </MetricsItemProytectos>
    </div>
  );
}
