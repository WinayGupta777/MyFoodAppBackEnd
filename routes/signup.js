const express = require('express');
const UserDataModel = require("../models/UserDataModel");
const router = express.Router();


router.post("/signup", async (req,res)=>{
    console.log("Request for user creation received!!");
    const userdata = req.body;
    console.log(userdata);
    const createUser = new UserDataModel((
        {
            username: userdata.username,
            email:userdata.email, 
            password:userdata.password 
        }
    ));

    await createUser.save()
    .then(()=>res.send(
        {
            status:true,
            message:"Account created successfully",
            username: userdata.username          
        }))
    .catch((err)=>{
        if(err.message.includes("E11000")){
            res.send({status:false,message:"This email is already exists"});
        }
        if(err.message.includes("atleast")){
            res.send({status:false,message:"Password should be atleast 5 character long"});
        }
        if(err.message.includes("EmailRequired")){
            res.send({status:false,message:"EmailRequired"});
        }
        console.log(err);
    });
})

module.exports = router;