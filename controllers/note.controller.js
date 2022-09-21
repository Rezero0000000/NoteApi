import Notes from "../models/note.models.js";

export const getAll = async (req, res) => {
  try{
   const notes = await Notes.findAll();
   res.status(200).send(notes);
  }
  catch {
    res.status(400).send({
      message: "Something wrong i can feel it"
    })
  }
}

export const findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Notes.findByPk(id);
    res.status(200).send(data);
  }
    catch{
    res.status(500).send({
      message: "Something wrong i can feelcit"
    })
  }
}

export const create = async(req, res) => {
  
  if(!req.body.title){
    res.status(500).send({
      message: "this content can't be empty"
    });
  }
  
  const note = {
    title: req.body.title,
    description: req.body.description,
    clear: req.body.clear || false
  };
  
  try{
    const note = await Notes.create(req.body);
    res.status(200).send(note);
  }
  catch{
    res.status(500).send({
      message: "Something wrong i can feelcit"
    })
  }
}

export const update = async(req, res) => {
  try {
    const id = req.params.id;
    const note = await Notes.update(req.body, {
      where: { id: id }
    });
    if(note == 1){
      res.status(200).send("Post was updated successfully");
    }else{
      res.status(500).send("can't update note with id " + id)
    }
  }
  catch {
    res.status(500).send("Something wrong i can feel it ");
  }
}

export const deleteNote = async(req, res) => {
  try{
    const id = req.params.id;
    const result = await Notes.destroy({
      where: {id: id}
    })
    if(result == 1){
      res.status(200).send("Post was deleted successfully");
    }else{
      res.status(500).send("can't deleted note with id " + id)
    }
  }
  catch {
    res.status(500).send("Something wrong i can feel it ");
  }
}

export const deleteAll = async(req, res) => {
  try{
    await Notes.destroy({
      where:{},
      truncate: true
    })
    res.status(200).send({
      message: "All note was deleted successfully"
    })
  }
  catch {
    res.status(500).send({
      message: "Something wrong I can feel it"
    })
  }
}

export const clear = async (req, res) => {
  try{
    const data = await Notes.findAll({
      where: {clear:true}
    })
    res.status(200).send(data);
  } 
   catch {
    res.status(500).send("Something wrong i can feel it ");
  }
}