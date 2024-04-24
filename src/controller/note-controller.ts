import { Request, Response } from "hyper-express";
import { NoteService } from "../services/note-service";
import { CreateNoteRequest} from "../model/note-model";

export class NoteController {
    static async create (req: Request, res: Response){
        try {
            const request: CreateNoteRequest = await req.json() as CreateNoteRequest;
            const response = await NoteService.create(request);

            res.status(200).json({
                data: response
            });
        }
        catch(e) {
            console.log(e)
            res.send("gagal")
        }
    }
}