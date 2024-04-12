import { type SchemaTypeDefinition } from "sanity";
import card from "./schemas/card";
import MineriaProyectos from "./schemas/MineriaProyectos";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [card, MineriaProyectos],
};
