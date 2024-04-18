const Proyectos = {
  name: "projects",
  title: "Proyectos",
  type: "document",

  fields: [
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
        ],
      },
    },
    {
      name: "date",
      title: "Fecha",
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
