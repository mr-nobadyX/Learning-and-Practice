const { error } = require('console');
const express = require('express')

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
// requesthander is a middlewere
app.get("/", function(req,res){
    res.send("Hello World");
})

app.get("/about", (req, res, next)=>{
    return next(new error("something went wrong"))
})

// will listen your request to this port
app.listen(3000)

