const express = require("express");
const db = require("../models");

function router(app){

app.post("/api/users",(req,res,next)=>{
    db.Users.create({
        username:req.body.username,
        password:req.body.password,
        avatar:req.body.avatar,
        fullname:req.body.fullname,
        email:req.body.email,
        contact:req.body.contact,
        status:req.body.status
    })
    .then((result) => {

        
    }).catch((err) => {
        
    });
})


app.get("/api/users",(req,res,next)=>{
    db.Users.findAll({
        where:{
        attribute:["username","avatar","fullname","email","contact","status"]
        }
    }).then((result) => {
        res.status(202).json(result)
    }).catch((err) => {
        next(err)
        
    });
})


app.patch("/api/users",(req,res,next)=>{
    db.users.update({
        avatar:req.body.avatar,
        fullname:req.body.fullname,
        email:req.body.email,
        contact:req.body.contact,
        status:req.body.status

    })

})


}