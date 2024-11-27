const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs'); 

app.get('/', (req, res)=>{
    res.render("index");
})

app.get('/profile:user', (req, res)=>{
    res.send(req.params.user);
    console.log("Good to go...");
})

app.listen(port, (req, res)=>{
    console.log("Runing fine");
})