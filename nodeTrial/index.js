const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");

const boekenRoutes = require("./modules/boeken");

app.use(cors());
app.use(express.json());
app.use("/boeken", boekenRoutes);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/", (req, res) => {
    res.send("hello world post")
    console.log("post");
})
mongoose.connect(process.env.CONNECTIONSTRING, { useUnifiedTopology: true ,
useNewUrlParser: true }, () => console.log("Connected to db") )
app.listen(3000);
