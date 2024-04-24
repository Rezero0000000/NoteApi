import { Request, Response } from "hyper-express";
import { NoteController } from "../controller/note-controller";
import { Server } from "hyper-express";
export const web = new Server();

// Notes
web.get("/", (req: Request, response: Response) => {
    response.send("Hello World");
})
web.post("/notes", NoteController.create);
web.get("/note/:noteId", NoteController.get);
