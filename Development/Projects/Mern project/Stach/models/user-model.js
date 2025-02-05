const mongoose = require("mongoose");

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