const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    Image: String,
    name: String,
    price: Number,
    discount: {
        typeof: Number,
        default: 0
    },

    bgcolor: String,
    panelcolor: String,
    textColor: String
});

module.exports = mongoose.model("product", productSchema);