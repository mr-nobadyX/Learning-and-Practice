const express = require('express');
const app = express();

const userModel = require("./models/user"); // Assuming this file exists and is correct
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set("view engine", "ejs");
app.use(express.json()); // Correctly invoke express.json()
app.use(express.urlencoded({ extended: true })); // Correctly invoke express.urlencoded()
app.use(cookieParser());


app.get("/", (req, res) => {
    res.render("index"); // Render the index.ejs file
});

app.post("/register", async (req, res)=>{
    let {email, password, userName, name, age} = req.body;
    
    let user = await userModel.findOne({email});
    if(user) return res.send(500).send("User already exits");

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async(err, hash)=>{
         let user =  await userModel.create({
                userName,
                name, age, email,
                password: hash,
            });

            jwt.sign({email:email, userid: user._id}, "passkey")
        }) 
    });
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
