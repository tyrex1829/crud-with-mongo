const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/dogs", (req, res) => {
    res.send("Wooff!!!");
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})