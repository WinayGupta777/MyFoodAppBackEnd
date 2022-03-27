const file = require("./mongoConnection.json");
const mongo = require("mongoose");

mongo.connect(file.link)
.then(()=>console.log("MongoDB connected"))
.catch((e)=>console.log("Mongo connection error: "+ e));