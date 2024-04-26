import { Request} from "hyper-express";
import { db } from "../database/mysql.config";
import { Validation } from "../validation/validation";
import { NoteValidation } from "../validation/note-validation";
import { CreateNoteRequest, Note, NoteRespone, ToNoteResponse, UpdateNoteRequest } from "../model/note-model";

export class NoteService {
    static async create (request: CreateNoteRequest): Promise<NoteRespone> {
        const validateRequest = await Validation.validate(NoteValidation.CREATE, request);
       
        const dataId = await db("notes").insert({
            title: validateRequest.title,
            category: validateRequest.category,
            message: validateRequest.message,
            category_id: validateRequest.category_id
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

    static async get (id:number):Promise <string>  {
        // const note = await NoteService.checkNoteMustExsist(id);
        // const note = await db("notes")
        // .where("notes.id", id)
        // .leftJoin("categories", "notes.category_id", "categories.id")
        // .first();

        // const note = await db('notes')
        // .where('notes.id', id)
        // .join('categories', 'notes.category_id', '=', 'categories.id')
        // .select({
        //         id: 'notes.id',
        //         title: 'notes.title',
        //         category: 'notes.category',
        //         slug: 'categories.slug',
        //         message: 'notes.message',
        //         category_id: 'notes.category_id',
        //         created_at: 'notes.created_at',
        // })
        // .select('notes.id', 'categories.title', 'categories.slug');


        const note = await db('categories')
        .where('categories.id', 1)
        .join('notes', 'categories.id', 'notes.category_id')
        .select(
          'categories.*',
          db.raw('JSON_ARRAYAGG(JSON_OBJECT("id", notes.id, "title", notes.title, "message", notes.message, "created_at", notes.created_at)) AS notes')
        )
        .groupBy('categories.id').first();


        console.log(note)

    return "hi"
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

    static async remove (id:number): Promise<string> {
        const response = await db("notes").where("id", id).del();
        if (!response) {
            return "Note not found"
        }
        return "OK"
    }

    static async list (): Promise<Array<Note>>  {
        const notes = await db.select().from("notes");
        if (!notes) {
            console.log("Note not found")
        }
        return notes
    }

}