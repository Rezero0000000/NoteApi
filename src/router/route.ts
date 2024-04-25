import { Request, Response } from "hyper-express";
import { NoteController } from "../controller/note-controller";
import { Server } from "hyper-express";
export const web = new Server();

// Notes
web.get("/", (req: Request, response: Response) => {
    response.send("Hello World");
})
web.post("/api/notes", NoteController.create);
web.get("/api/note/:noteId", NoteController.get);
web.put("/api/note/:noteId", NoteController.update);
web.delete("/api/note/:noteId", NoteController.remove);
web.get("/api/notes", NoteController.list);

