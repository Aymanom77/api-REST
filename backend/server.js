const express = require("express");
 require("dotenv").config({path:"config/.env"});
const connectDB = require("./config/db");
const port = 5000;
//connexion a la DB
connectDB();

const app = express();

//Middleware qui permet de traiter les données de la request 
app.use(express.json());
app.use (express.urlencoded({extended: false }));

app.use("/post", require("./routes/post.routes"));


//lancer le serveur 
app.listen(port,() => console.log("le serveur a demarré au port " + port));