const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const Product = require("./models/product");

mongoose.connect("mongodb://127.0.0.1:27017/farmStand")
    .then(() => {
        console.log("Mongo Connection Open!!!");
    })
    .catch(err => {
        console.log("Oh No, Mongo Connection Error!!!");
        console.log(err);
    })


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.render("products/index", { products });
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})