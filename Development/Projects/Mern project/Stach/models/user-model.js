const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017");

const userSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    cart: {
        typeof: Array,
        default: [],
    },

    isadmin : Boolean,
    orders: {
        typeof: Array,
        default: [],
    },

    contact: Number,
    piture: String
});

module.exports = mongoose.model("user", userSchema);