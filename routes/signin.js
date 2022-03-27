const express = require('express');
const UserDataModel = require("../models/UserDataModel");
const router = express.Router();


router.post("/signin",async (req,res)=>{
    const userdata = req.body;

    const obj = await UserDataModel.findOne({email:userdata.email});
    console.log(obj);
    if (obj){
        if (obj.password==userdata.password) {
            res.send({
                status:true,
                message:"Authentication Successful"
            });
        } else {
            res.send({status:false,message:"Incorrect Password"});
        }
    }else {res.send({status:false,message:"Email does not exists"});}
})

module.exports = router;