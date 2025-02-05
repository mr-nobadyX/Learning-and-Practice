const mongoose = require("mongoose");
 

const ownerSchema = mongoose.Schema({
    fullName: {
        typeof: String,
        minLength: 3,
        trim: true
    },

    email: String,
    password: String,
    products: {
        typeof: Array,
        default: [],
    },
    piture: String,
    gstin: String
});

module.exports = mongoose.model("owner", ownerSchema);