import { type SchemaTypeDefinition } from "sanity";
import card from "./schemas/card";
import fotos from "./schemas/fotos";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [card, fotos],
};
