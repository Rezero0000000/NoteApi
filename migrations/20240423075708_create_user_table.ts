import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.increments("id");
        table.string("name");
        table.string("email").unique();
        table.string("password");
        table.timestamps(false, true);
    })
}


export async function down(knex: Knex): Promise<void> {
}

