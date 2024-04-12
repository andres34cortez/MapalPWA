const MineriaProyectos = {
  name: "miningProjects",
  title: "Proyectos Mineria",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
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
      of: [{ type: "image", name: "picture" }],
    },
  ],
};
export default MineriaProyectos;
