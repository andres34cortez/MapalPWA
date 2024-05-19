"use client";
import React from "react";
import star from "@/assets/starMetrics.png";
import house from "@/assets/houseMetrics.png";
import lineal from "@/assets/linealMetrics.png";
import m2 from "@/assets/m2metrics.png";
import mov from "@/assets/movMetrics.png";
import maps from "@/assets/mapsMetrics.png";
import MetricsItem from "@/components/MetricsItem";
import { useLanguage } from "@/context/LayoutContext";

export default function Metricas() {
  const { language } = useLanguage();
  return (
    <div className='flex flex-wrap justify-center gap-14 px-8 pb-4 pt-6 items-start'>
      <MetricsItem image={star} tprimary='309'>
        {language === "ESP" ? <>Obras ejecutadas</> : <>Works executed</>}
      </MetricsItem>
      <MetricsItem image={maps} tprimary='1960'>
        {language === "ESP" ? <>Km de rutas</> : <>Km of routes</>}
      </MetricsItem>
      <MetricsItem image={m2} tprimary='285K'>
        {language === "ESP" ? <>M2 construidos</> : <>M2 built</>}
      </MetricsItem>
      <MetricsItem image={mov} tprimary='4.8M'>
        {language === "ESP" ? (
          <>
            M3 movimiento
            <br /> de suelo
          </>
        ) : (
          <>Ground movement</>
        )}
      </MetricsItem>
      <MetricsItem image={lineal} tprimary='750'>
        {language === "ESP" ? (
          <>
            Metros lineales de
            <br /> puentes
          </>
        ) : (
          <>
            Linear meters of <br />
            bridges
          </>
        )}
      </MetricsItem>
      <MetricsItem image={house} tprimary='4.088'>
        {language === "ESP" ? <>Viviendas</> : <>Houses</>}
      </MetricsItem>
    </div>
  );
}
