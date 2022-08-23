const models = require("../models");

exports.getAll = async (req, res) => {
  try{
   const notes = await models.Note.findAll();
   res.status(200).send(notes);
  }
  catch {
    res.status(400).send({
      message: "Something wrong i can feel it"
    })
  }
}

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await models.Note.findByPk(id);
    res.status(200).send(data);
  }
    catch{
    res.status(500).send({
      message: "Something wrong i can feelcit"
    })
  }
}

exports.create = async(req, res) => {
  
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
    const note = await models.Note.create(req.body);
    res.status(200).send(note);
  }
  catch{
    res.status(500).send({
      message: "Something wrong i can feelcit"
    })
  }
}

exports.update = async(req, res) => {
  try {
    const id = req.params.id;
    const note = await models.Note.update(req.body, {
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

exports.delete = async(req, res) => {
  try{
    const id = req.params.id;
    const result = await models.Note.destroy({
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

exports.deleteAll = async(req, res) => {
  try{
    await models.Note.destroy({
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

exports.clear = async (req, res) => {
  try{
    const data = await models.Note.findAll({
      where: {clear:true}
    })
    res.status(200).send(data);
  } 
   catch {
    res.status(500).send("Something wrong i can feel it ");
  }
}