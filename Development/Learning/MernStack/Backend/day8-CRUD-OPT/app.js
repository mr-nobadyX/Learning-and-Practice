const express = require('express');
const app = express();

const userModel = require('./usermodel');
const usermodel = require('./usermodel');

app.get("/", (req,res)=>{
    res.send("Hey");
})

app.get("/create", async (req, res)=>{
    let createuser = await userModel.create({
        name: "Sanju",
        userName: "BossSanjay",
        email: "sanju@gmail.com"
    })

    res.send(createuser);
})

app.get("/update", async (req, res)=>{
    let updateduser = await userModel.findOneAndUpdate({name:"Sanju"}, {userName:"SanjayKushwaha"}, {new:true});
    res.send(updateduser);
})

app.get("/read", async (req, res)=>{
    let users = await userModel.findOne({userName: "BossSanjay"});
    res.send(users);
})

app.get("/delete", async(req, res)=>{
    let user = await userModel.findOneAndDelete({userName:"BossSanjay"})
    res.send(user);
})

app.listen(3000);