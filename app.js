require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require("mongoose");
require("./conn")
const users = require("./model/userSchema");

const cors = require("cors");
const router = require("./routes/router")
const { expr } = require("jquery");
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`server is connected port Number : ${port}`);

});


