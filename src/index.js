const express = require("express");
const app = express();
const path = require("path");

const pathbro = path.join(__dirname, "../public");
app.use(express.static(pathbro));

app.get("/", (req, res) => {
    // res.write("<h1> Hiee Brooo</h1>");
    // res.write("<p>how are you??</p>");
    // res.send();
    res.send({
        key1: "value1"
    })
})

app.listen(4000, () => {
    console.log("Im running on port 4000");
})