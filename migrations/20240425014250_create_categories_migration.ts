import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('categories', table => {
        table.increments("id");
        table.string("title").notNullable();
        table.string("slug").notNullable().unique();
        table.timestamps(false, true);
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('categories');
}

