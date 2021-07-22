import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("person", (table) => {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable().unique();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("person");
}
