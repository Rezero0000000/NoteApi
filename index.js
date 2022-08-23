const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require("./routes/note.route.js")(app);
app.get("/", (req, res) => {
    res.json({
      message: " Welcome "
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is running on " + PORT)
});