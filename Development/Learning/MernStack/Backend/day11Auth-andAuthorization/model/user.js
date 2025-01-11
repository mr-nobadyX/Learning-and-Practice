// Fix 1: Correct spelling of 'mongoose'
const mongoose = require('mongoose');  // not 'moongoose'

mongoose.connect(`mongodb://127.0.0.1:27017/authtestapp`);

const userSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    age: Number
})

// Fix 2: Correct method name 'model' not 'module'
module.exports = mongoose.model("user", userSchema);  // not mongoose.module