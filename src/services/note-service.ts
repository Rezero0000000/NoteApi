import { Request} from "hyper-express";
import { db } from "../database/mysql.config";

export class NoteService {
    static async create (request: Request) {

        const response = await db("notes").insert({
            title: "Bad day",
            category: "thought",
            message: "I am bad"
        });

        console.log(response);
        console.log("WADUH")

    }
}