module.exports = app => {
  const notes = require("../controllers/note.controller.js");
  let router = require("express").Router();
  
  router.get("/", notes.getAll);
  router.get("/clear", notes.clear);
  router.get("/:id", notes.findOne);

  router.post("/", notes.create);
  router.put("/:id", notes.update);
  
  router.delete("/:id", notes.delete);
  router.delete("/", notes.deleteAll);
  
  app.use("/api/note", router);
};