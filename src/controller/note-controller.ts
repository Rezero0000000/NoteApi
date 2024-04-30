import { CreateNoteRequest, UpdateNoteRequest} from "../model/note-model";
import { Request, Response, MiddlewareNext } from "hyper-express";
import { NoteService } from "../services/note-service";
import { UserRequest } from "../type/user-request";

export class NoteController {
    static async create (req: UserRequest, res: Response, next: MiddlewareNext){
        try {
            const request: CreateNoteRequest = await req.json() as CreateNoteRequest;
            const userId: number = req.user!.id

            const response = await NoteService.create(request, userId, res);
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

    static async get (req: UserRequest, res: Response, next: MiddlewareNext) {
        try {
            const noteId = Number(req.params.noteId);
            const response = await NoteService.get(noteId, res);
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

    static async update (req: UserRequest, res: Response, next: MiddlewareNext) {
        try {
            const request: UpdateNoteRequest = await req.json() as UpdateNoteRequest;
            const noteId = Number(req.params.noteId);

            const response = await NoteService.update(request, noteId, res);
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

    
    static async remove (req: UserRequest, res: Response, next: MiddlewareNext) {
        try {
            const noteId = Number(req.params.noteId);
            const response = await NoteService.remove(noteId, res);
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

    static async list (req: UserRequest, res: Response, next: MiddlewareNext) {
        try {
            const userId = req.user!.id
            const response = await NoteService.list(res, userId);
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