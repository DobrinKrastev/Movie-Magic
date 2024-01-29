const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const port = 5000;
const router = require("./router")
const app = express();

const handlebarsConfig = require("./config/handlebarsConfig");
handlebarsConfig(app);

const expressConfig = require("./config/expressConfig");
expressConfig(app);

app.use(router);



app.listen(port,()=> console.log(`App is listening on port ${port}`));