const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs'); 

app.get('/', (req, res)=>{
    fs.readdir(`./files`, (err, files)=>{
        res.render("index", {files:files});
    })  
})

app.get('/file/:filename',(req, res)=>{
    fs.readFile(`./file/${req.params.filename}`, 'utf-8', (err, filedata)=>{
    res.render("show");
    })
})

app.post('/create', (req, res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err)=>{
       res.redirect("/");
    });
})

app.listen(port, (req, res)=>{
    console.log("Runing fine");
})