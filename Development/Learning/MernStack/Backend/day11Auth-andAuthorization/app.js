const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require("./model/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get("/", (req, res)=>{
    res.render('index');
});

// Fix 1: Using async/await properly with bcrypt
app.post("/create", async (req, res) => {
    try {
        const {userName, email, password, age} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        
        const createdUser = await userModel.create({
            userName,
            email,
            password: hash,
            age
        });

        const token = jwt.sign({email}, "shhhhhh");
        res.cookie("token", token);
        res.send(createdUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.post("/login", async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.body.email});
        if(!user) return res.send("User not found");

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch) {
            return res.send("Invalid password");
        }

        const token = jwt.sign({email: user.email}, "shhhhhh");
        res.cookie("token", token);
        res.send("Login successful");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Fix 4: Added proper logout 
app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
});

app.listen(3000);


 