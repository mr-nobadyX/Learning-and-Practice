const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt  = require('bcrypt');

const jwt = require('jsonwebtoken');

app.use(cookieParser());



app.get("/", (req, res)=>{

    // cookie setting
    // res.cookie("name", "Sanjay");
    // res.send("Its working fine");
    // console.log(req.cookies);

    // bcrypt - encryptions
    // bcrypt.genSalt(10, (err, salt)=>{
    //     bcrypt.hash("solololoo", salt, (err, hash)=>{
    //         console.log(hash);
    //         res.send(hash);
    //     })
    // })

    
    // Dcryptions
    // bcrypt.compare(myPlaintextPassword, '$2b$10$D2e1O2zC04e8v5YC4r5QAuSHZj43LRtEzj12cQxmMNWmdXqChzXgC', function(err, result) {
    //     // result == true
    //     console.log(result);
    // });

    let token = jwt.sign({email: "sanjay@Exmple.com"}, "Secret");
    res.cookie("token", token);
    console.log(token);

    res.send("Done");
})

app.get("/read", (req, res)=>{
    const data = jwt.verify(req.cookies.token, "Secret");
    console.log(data);
})

app.listen(3000);