import { Request, Response, MiddlewareNext } from "hyper-express";
import { NoteService } from "../services/note-service";
import { CreateNoteRequest, UpdateNoteRequest} from "../model/note-model";

export class NoteController {
    static async create (req: Request, res: Response, next: MiddlewareNext){
        try {
            const request: CreateNoteRequest = await req.json() as CreateNoteRequest;
            const response = await NoteService.create(request);
            res.status(200).json({
                data: response
            });
        }
        catch(e) {
            res.status(400).json({
                error: e
            })
        }
    }

    static async get (req: Request, res: Response, next: MiddlewareNext) {
        try {
            const noteId = Number(req.params.noteId);
            const response = await NoteService.get(noteId);
            res.status(200).json({
                data: response
            });
        }
        catch(e) {
            res.status(400).json({
                error: e
            })
        }
    }

    static async update (req: Request, res: Response, next: MiddlewareNext) {
        try {
            const request: UpdateNoteRequest = await req.json() as UpdateNoteRequest;
            const noteId = Number(req.params.noteId);

            const response = await NoteService.update(request, noteId);
            res.status(200).json({
                data: response
            });
        }
        catch(e) {
            res.status(400).json({
                error: e
            })
        }
    }
}