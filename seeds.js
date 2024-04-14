// to seed my data of db
const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose.connect("mongodb://127.0.0.1:27017/farmStand")
    .then(() => {
        console.log("Mongo Connection Open!!!");
    })
    .catch(err => {
        console.log("Oh No, Mongo Connection Error!!!");
        console.log(err);
    })

const p = new Product({
    name: "Ruby Greek Fruit",
    price: 1.99,
    category: "Fruit"
})
p.save()
    .then(p => {
        console.log(p);
    })
    .catch(err => {
        console.log(err);
    })