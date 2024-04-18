import { type SchemaTypeDefinition } from "sanity";
import card from "./schemas/card";
import Proyectos from "./schemas/proyectos";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [card, Proyectos],
};
