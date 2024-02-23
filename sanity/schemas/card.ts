const card = {
  name: "card",
  title: "Noticia",
  type: "document",
  //   es como se ve en el panel de sanity
  fields: [
    {
      name: "image",
      title: "Imagen",
      type: "image",
    },
    {
      name: "title",
      title: "Titulo",
      type: "string",
    },
    {
      name: "description",
      title: "Descripcion",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
  ],
};
export default card;
