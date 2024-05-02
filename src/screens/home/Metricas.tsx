'use client'
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
    <div className="flex flex-wrap justify-center gap-14 p-8 items-start">
      <MetricsItem image={star} tprimary="309">
        Obras ejecutadas
      </MetricsItem>
      <MetricsItem image={maps} tprimary="1960">
        Km de rutas
      </MetricsItem>
      <MetricsItem image={m2} tprimary="285K">
        M2 construidos
      </MetricsItem>
      <MetricsItem image={mov} tprimary="4.8M">
        M3 movimiento
        <br /> de suelo
      </MetricsItem>
      <MetricsItem image={lineal} tprimary="750">
        Metros lineales de
        <br /> puentes
      </MetricsItem>
      <MetricsItem image={house} tprimary="4.088">
        Viviendas
      </MetricsItem>
    </div>
  );
}
