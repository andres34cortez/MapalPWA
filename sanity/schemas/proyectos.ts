import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { title } from "process";

const Proyectos = {
  name: "projects",
  title: "Proyectos",
  type: "document",
  orderings: [orderRankOrdering],

  fields: [
    orderRankField({ type: "projects" }),
    {
      name: "name",
      title: "Nombre",
      type: "string",
    },
    {
      name: "type",
      title: "Tipo de Proyecto",
      type: "string",
      options: {
        list: [
          { title: "Viales", value: "viales" },
          { title: "Arquitectura", value: "arquitectura" },
          { title: "Hidraulicas", value: "hidraulicas" },
          { title: "Infraestructura", value: "infraestructura" },
          { title: "Mineria", value: "mineria" },
          { title: "Inmobiliaria", value: "inmobiliaria" },
          { title: "Puentes", value: "puentes" },
          { title: "Petróleos", value: "petroleos" },
        ],
      },
    },
    {
      name: "month",
      title: "Mes",
      type: "string",
    },
    {
      name: "year",
      title: "Año",
      type: "number",
    },
    {
      name: "text",
      title: "Descripción",
      type: "text",
    },
    {
      name: "state",
      title: "Estado",
      type: "string",
    },
    {
      name: "localidad",
      title: "Localidad",
      type: "string",
    },
    {
      name: "superficie",
      title: "Superficie",
      type: "string",
    },
    {
      name: "comitente",
      title: "Comitente",
      type: "string",
    },
    {
      name: "images",
      title: "Imagenes",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
export default Proyectos;
