const express = require('express');
const app = express();

const path = require('path');
const userModel = require('./models/user');
const user = require('./models/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render("index");
})

app.get("/read", async(req, res)=>{
    
    let users = await userModel.find();
    res.render("read", {users});
})


app.post("/create", async (req, res) => {
    let { name, email, image } = req.body;

    // Check for duplicate users
    let existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
        return res.status(400).send("User with this email already exists!");
    }

    // Create the user
    await userModel.create({ name, email, image });

    res.redirect("/read");
});

app.get("/edit/:userid", async (req, res) => {
    let user = await userModel.findOne({ _id: req.params.userid });
    res.render("edit", { user }); // Pass 'user', not 'users'
});

app.post("/update/:userid", async(req, res)=>{
    let {image, name, email} = req.body;
    let user = await userModel.findOneAndUpdate({_id: req.params.userid}, {image, name, email}, {new:true});
    res.redirect("/read")
})

app.get("/delete/:id", async(req, res)=>{
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
})


app.listen(3000);