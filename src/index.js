const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose")
const path = require("path");

const port = 5000;
const router = require("./router")
const app = express();

const handlebarsConfig = require("./config/handlebarsConfig");
handlebarsConfig(app);

const expressConfig = require("./config/expressConfig");
expressConfig(app);

app.use(router);

mongoose.connect("mongodb://localhost:27017/magic-movies")
.then(()=>{
    console.log("DB connected")
    app.listen(port,()=> console.log(`App is listening on port ${port}`));
}).catch(err=> console.log("Error"));