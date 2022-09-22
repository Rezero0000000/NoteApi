import express from "express";
import cors from "cors";
import db from "./models/index.js";
// import Notes from "./models/note.models.js";
import router from "./routes/note.route.js";
const app = express();

const whiteList = [ "localhost:8081" ];
let corsOption = {
  origin: function(origin, callback){
    if(whiteList.indexOf(origin) != -1 || !origin){
      callback(null, true);
    }else{
      callback(new Error("you are not allowed by cors"))
    }
  }
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// db
try {
  await db.authenticate()
  console.log("database Connected...")
  // await Notes.sync()
}
catch (error) {
  console.error(error)
}

app.use(router);
app.get("/", (req, res) => {
    res.json({
      message: " Welcome "
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is running on " + PORT)
});