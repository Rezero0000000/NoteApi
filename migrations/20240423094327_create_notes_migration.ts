import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('notes', table => {
        table.increments("id");
        table.string("title");
        table.string("category").unique();
        table.string("message");
        table.timestamps(false, true);
    })
}


export async function down(knex: Knex): Promise<void> {
}

