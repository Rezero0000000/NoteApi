import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('notes', table => {
        table.increments("id");
        table.string("title").notNullable();
        table.string("category").notNullable().unique();
        table.string("message").notNullable();
        table.timestamps(false, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('notes');
}

