import { Request, Response } from "hyper-express";
import { NoteService } from "../services/note-service";

export class NoteController {
    static async create (request: Request, response: Response){
        try {
            const response = await NoteService.create(request);
        }
        catch(e) {
            console.log(e)
            response.send("gagal")
        }
    }
}