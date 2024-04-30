import { Request, Response} from "hyper-express";
import { db } from "../database/mysql.config";
import { Validation } from "../validation/validation";
import { NoteValidation } from "../validation/note-validation";
import { CreateNoteRequest, Note, NoteRespone, ToNoteResponse, UpdateNoteRequest } from "../model/note-model";
import { UserService } from "./user-service";
import { CategoryService } from "./category-service";

export class NoteService {
    static async create (request: CreateNoteRequest, userId:number, res: Response): Promise<NoteRespone> {
        const validateRequest = await Validation.validate(NoteValidation.CREATE, request);
        await UserService.checkUserMustExsist(userId, res);
        await CategoryService.checkCategoryMustExsist(validateRequest.category_id, res);
       
        const dataId = await db("notes").insert({
            title: validateRequest.title,
            category: validateRequest.category,
            message: validateRequest.message,
            user_id: userId,
            category_id: validateRequest.category_id
        });

        const note = await NoteService.checkNoteMustExsist(dataId[0], res);

        return ToNoteResponse(note)
    }

    static async checkNoteMustExsist (id: number, res: Response) {
        const note = await db("notes").where("id", id).first();
        if (!note) {
            res.status(404).json({
                message: "Note is not found"
              })
              res.end();
        }
        return note;
    }

    static async get (id:number, res: Response):Promise <NoteRespone>  {
        const note = await db('categories')
        .where('categories.id', 1)
        .join('notes', 'categories.id', 'notes.category_id')
        .select(
          'categories.*',
          db.raw('JSON_ARRAYAGG(JSON_OBJECT("id", notes.id, "title", notes.title, "message", notes.message, "created_at", notes.created_at)) AS notes')
        )
        .groupBy('categories.id').first();

      
        if (!note) {
            res.status(404).json({
                message: "Note is not found"
              })
              res.end();
        }
        return ToNoteResponse(note)
    }

    static async update (request: UpdateNoteRequest, id: number, res: Response) {
        const validateRequest = await Validation.validate(NoteValidation.UPDATE, request);
        await NoteService.checkNoteMustExsist(id, res);

        const noteId = await db("notes").where("id", id).update({
            title: validateRequest.title,
            category: validateRequest.category,
            message: validateRequest.message,
            category_id: validateRequest.category_id
        })

        const note = await NoteService.checkNoteMustExsist(id, res);
        return ToNoteResponse(note);
    }

    static async remove (id:number, res: Response): Promise<string> {
        const response = await db("notes").where("id", id).del();
        if (!response) {
            res.status(404).json({
                message: "Note is not found"
              })
              res.end();
        }
        return "OK"
    }

    static async list (res: Response, userId: number): Promise<Array<Note>>  {
        const notes = await db.select().from("notes").where("user_id", userId);
        if (!notes) {
            res.status(404).json({
                message: "Category is not found"
              })
              res.end();
        }
        return notes
    }

}