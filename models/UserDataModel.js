const file = require("./mongoConnection.json");
const mongo = require("mongoose");

mongo.connect(file.link)
.then(()=>console.log("MongoDB connected"))
.catch((e)=>console.log("Mongo connection error: "+ e));

const UserDataModel = mongo.model("UserData_FoodApp",
    mongo.Schema({
        username:{
            type: String,
            required:[true, "Username required"]
        },
        email:{
            type: String,
            unique:true,
            required:[true, "EmailRequired"],
        },
        password:{
            type: String,
            minlength: [5,"Password must be atleast 6"],
            required:[true, "PasswordRequired"]
        }
    })
);

module.exports = UserDataModel;