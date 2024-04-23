import { Request, Response } from "hyper-express";

export class ContactController {
    static async get (request: Request, response: Response){
        try {
            response.send("berhasil")
        }
        catch(e) {
            response.send("gagal")
        }
    }
}