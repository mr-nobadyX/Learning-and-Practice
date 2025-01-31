const express = require('express');
const app = express();
const port = 300;

const userModel = require("./models/user");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set("view engine", "ejs");
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get("/", (req, res) => {
    res.render("index"); 
    console.log("Moving fine");
});

app.post("/register", async (req, res)=>{
    let {email, password, userName, name, age} = req.body;
    
    let user = await userModel.findOne({email});
    if(user) return res.send(500).send("User Already Exits");

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async(err, hash)=>{
         let user =  await userModel.create({
                userName,
                name, age, email,
                password: hash,
            });

            jwt.sign({email:email, userid: user._id}, "PassKey")
        }) 
    });
})

app.listen(port, () => {
    console.log("Server running on http://localhost:3000");
});
