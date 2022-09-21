  import { getAll, clear, findOne, create, update, deleteNote, deleteAll } from "../controllers/note.controller.js";
  import express from "express";
  const router = express.Router()  
  
  router.get("/api/note", getAll);
  router.get("/api/note/clear", clear);
  router.get("/api/note/:id", findOne);

  router.post("/api/note", create);
  router.put("/api/note/:id", update);
  
  router.delete("/api/note/:id", deleteNote);
  router.delete("/api/note", deleteAll);
  
  export default router;