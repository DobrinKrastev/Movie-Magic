const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const port = 5000;
const router = require("./router")
const app = express();


app.engine("hbs",handlebars.engine({
    extname: "hbs",
}));

app.set("view engine","hbs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(router);



app.listen(port,()=> console.log(`App is listening on port ${port}`));