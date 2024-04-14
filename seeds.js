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

// const p = new Product({
//     name: "Ruby Greek Fruit",
//     price: 1.99,
//     category: "Fruit"
// })
// p.save()
//     .then(p => {
//         console.log(p);
//     })
//     .catch(err => {
//         console.log(err);
//     })


// above way commented because we wanted to make many items and use above method needs to make one and save it, that's why using insertMany

const seedProducts = [
    {
        name: "Fairy Eggplant",
        price: 1.00,
        category: "vegetable"
    },
    {
        name: "Organic Goddness Melon",
        price: 4.99,
        category: "fruit"
    },
    {
        name: "Organic Mini Seedless Watermelon",
        price: 3.99,
        category: "fruit"
    },
    {
        name: "Organic Celery",
        price: 1.50,
        category: "vegetable"
    },
    {
        name: "Chocolate Whole Milk",
        price: 2.69,
        category: "dairy"
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e)
    })