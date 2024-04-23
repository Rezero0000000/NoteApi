import { Request} from "hyper-express";
import knex from "knex";

export class NoteService {
    static async create (request: Request) {
        const response = await knex("keke").insert({
            title: "Bad day",
            category: "bad",
            message: "I am bad"
        });

        console.log(response);
        console.log("WADUH")

    }
}