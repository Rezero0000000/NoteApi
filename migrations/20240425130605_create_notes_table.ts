import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('notes', table => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.string("category").notNullable();
        table.string("message").notNullable();

        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');

        table.integer('category_id').unsigned();
        table.foreign('category_id').references('categories.id');
        table.timestamps(false, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('notes');
}
