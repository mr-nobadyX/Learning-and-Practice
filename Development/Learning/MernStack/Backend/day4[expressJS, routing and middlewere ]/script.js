const { error } = require('console');
const express = require('express')
const app = express();

// routes
// requesthander is a middlewere
app.get("/", function(req,res){
    res.send("Hello World");
})

app.get("/about", (req, res, next)=>{
    return next(new error("something went wrong"))
})

 

app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.send(500).send("something went wrong kf wsj sfcsd hf")
})

// will listen your request to this port
app.listen(3000)

