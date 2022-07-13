const express = require("express");
const app = express();
const path = require("path");

const pathbro = path.join(__dirname, "../public");
// app.use(express.static(pathbro));

app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.render("test");
})

app.get("/", (req, res) => {
    res.send()
})

app.listen(4000, () => {
    console.log("Im running on port 4000");
})