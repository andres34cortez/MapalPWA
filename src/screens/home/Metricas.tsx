import React from "react";
import star from "@/assets/starMetrics.png";
import house from "@/assets/houseMetrics.png";
import lineal from "@/assets/linealMetrics.png";
import m2 from "@/assets/m2metrics.png";
import mov from "@/assets/movMetrics.png";
import maps from "@/assets/mapsMetrics.png";
import MetricsItem from "@/components/MetricsItem";

export default function Metricas() {
  return (
    <div className='flex flex-wrap justify-center gap-4 p-8'>
      <MetricsItem image={star} tprimary='309' tsecondary='Obras ejecutadas.' />
      <MetricsItem image={maps} tprimary='1960' tsecondary='Km de rutas.' />
      <MetricsItem image={m2} tprimary='285K' tsecondary='M2 construidos.' />
      <MetricsItem
        image={mov}
        tprimary='4.8M'
        tsecondary='M3 movimiento de suelo.'
      />
      <MetricsItem
        image={lineal}
        tprimary='750'
        tsecondary='Metros lineales de puentes.'
      />
      <MetricsItem image={house} tprimary='4.088' tsecondary='Viviendas.' />
    </div>
  );
}
