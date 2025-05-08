import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const card = {
  name: "card",
  title: "Noticias",
  type: "document",
  orderings: [orderRankOrdering],
  //   es como se ve en el panel de sanity
  fields: [
    orderRankField({ type: "Noticias" }),
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
