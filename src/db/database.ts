import knex from "knex";
import { Model } from "objection";

import knexfile from "./knexfile";

export function setupDB() {
  // initialize knex
  const initialization = knex(knexfile.development);

  // Give the knex instance to objection
  Model.knex(initialization);
}
