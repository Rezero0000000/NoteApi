import { Request} from "hyper-express";
import { db } from "../database/mysql.config";
import { Validation } from "../validation/validation";
import { NoteValidation } from "../validation/note-validation";
import { CreateNoteResponse } from "../model/note-model";

export class NoteService {
    static async create (request: CreateNoteResponse): Promise<> {

// console.log(request)
        const validateRequest = await Validation.validate(NoteValidation.CREATE, request);
       
        const response = await db("notes").insert({
            title: validateRequest.title,
            category: validateRequest.category,
            message: validateRequest.message
        });

    
    }
}