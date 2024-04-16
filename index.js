const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

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

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy"];

app.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.render("products/index", { products });
})

app.get("/products/new", (req, res) => {
    res.render("products/new", { categories });
})

app.post("/products", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

app.get("/products/:id", async (req, res) => {
    const { id } = req. params;
    const product = await Product.findById(id);
    res.render("products/show", { product });
})

app.get("/products/:id/edit", async (req, res) => {
    const { id } = req. params;
    const product = await Product.findById(id);
    res.render("products/edit", { product, categories });
})

app.put("/products/:id", async (req, res) => {
    const { id } = req. params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

app.delete("/products/:id", async (req, res) => {
    const { id } = req. params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})