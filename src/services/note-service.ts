import { Request} from "hyper-express";
import { db } from "../database/mysql.config";
import { Validation } from "../validation/validation";
import { NoteValidation } from "../validation/note-validation";
import { CreateNoteRequest, NoteRespone, ToNoteResponse, UpdateNoteRequest } from "../model/note-model";

export class NoteService {
    static async create (request: CreateNoteRequest): Promise<NoteRespone> {
        const validateRequest = await Validation.validate(NoteValidation.CREATE, request);
       
        const dataId = await db("notes").insert({
            title: validateRequest.title,
            category: validateRequest.category,
            message: validateRequest.message
        });

        const note = await NoteService.checkNoteMustExsist(dataId[0]);

        return ToNoteResponse(note)
    }

    static async checkNoteMustExsist (id: number) {
        const note = await db("notes").where("id", id).first();
        if (!note) {
            console.log("Not found")
            return 0
        }
        return note;
    }

    static async get (id:number): Promise<NoteRespone> {
        const note = await NoteService.checkNoteMustExsist(id);
        return ToNoteResponse(note);
    
    }

    static async update (request: UpdateNoteRequest, id: number) {
        const validateRequest = await Validation.validate(NoteValidation.UPDATE, request);
        await NoteService.checkNoteMustExsist(id);


        const noteId = await db("notes").where("id", id).update({
            title: validateRequest.title,
            category: validateRequest.category,
            message: validateRequest.message
        })
        const note = await NoteService.checkNoteMustExsist(id);
        return ToNoteResponse(note);
    }
}