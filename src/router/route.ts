import { NoteController } from "../controller/note-controller";
import { Server } from "hyper-express";
import { CategoryController } from "../controller/category-controller";
export const web = new Server();

// Notes
web.post("/api/note", NoteController.create);
web.get("/api/note/:noteId", NoteController.get);
web.put("/api/note/:noteId", NoteController.update);
web.delete("/api/note/:noteId", NoteController.remove);
web.get("/api/notes", NoteController.list);

// Categories
web.post("/api/category", CategoryController.create);
web.get("/api/category/:categoryId", CategoryController.get);
web.put("/api/category/:categoryId", CategoryController.update);
web.delete("/api/category/:categoryId", CategoryController.remove);

