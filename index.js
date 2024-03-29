// const { Console } = require('console');
const express = require('express')

const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.routes.js');
const { json } = require('body-parser');
const app = express()

// middle ware
app.use(express.json());
     
// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello this is Aayush chauhan. And you are getting this from node API. and updated")
});


mongoose.connect("mongodb+srv://aayushchauhan570:m03JvAFxJ4nEXSeI@newdatabase.djaqs.mongodb.net/node_API?retryWrites=true&w=majority&appName=NewDatabase")
.then(() =>{
    console.log("connected to the database!");
    app.listen(3000, () =>{
        console.log("server is running on port 3000");
    });
})
.catch(() =>{
    console.log("Connection failed!");
});