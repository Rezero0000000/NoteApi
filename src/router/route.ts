import { NoteController } from "../controller/note-controller";
import {  Server } from "hyper-express";
import { CategoryController } from "../controller/category-controller";
import { UserController } from "../controller/user-controller";
import { authMiddleware } from "../middleware/auth-middleware";
export const web = new Server();

web.use((req, res, next) => {
    if (req.path !== '/api/login' && req.path !== '/api/register') {
        authMiddleware(req, res, next);
    } else {
        next();
    }
});

// Public apis
web.post("/api/register", UserController.register);
web.post("/api/login", UserController.login);

// Users 
web.get("/api/user/", UserController.get);
web.put("/api/user/", UserController.update);

// Categories
web.post("/api/category", CategoryController.create);
web.get("/api/category/:categoryId", CategoryController.get);
web.put("/api/category/:categoryId", CategoryController.update);
web.delete("/api/category/:categoryId", CategoryController.remove);

// Notes
web.post("/api/note", NoteController.create);
web.get("/api/note/:noteId", NoteController.get);
web.put("/api/note/:noteId", NoteController.update);
web.delete("/api/note/:noteId", NoteController.remove);
web.get("/api/notes", NoteController.list);
