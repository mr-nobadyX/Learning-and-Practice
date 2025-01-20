const express = require('express');
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");


app.get("/", (req, res)=>{
    res.send("Fine Everything");
})

app.get("/create", async (req, res)=>{
   let user = await userModel.create({
    userName: "Sanjay",
    age: 29,
    email: "Sanju17@gmail.com"
   });

   res.send(user);
})

app.get("/post/create", async (req, res)=>{
    let post = await postModel.create({
        postData: "Is everything fine every buddy",
        user: "678e1da2bf0af14b9fc06f8d",
    })

    let user = await userModel.findOne({_id: "678e1da2bf0af14b9fc06f8d"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})

app.listen(3000);