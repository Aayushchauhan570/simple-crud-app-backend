const mongoose = require('mongoose');

const productSchmea = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "please enter product name"]
        },

        quantity:{
            type: Number,
            required: true,
            default: 0
        },

        price:{
            type: Number,
            required: true,
            default: 0
        },

        Image:{
            type: Number,
            required: false
        },
    },
    {
        timestampe: true
    }
);

const Product = mongoose.model("Product", productSchmea);

module.exports = Product;