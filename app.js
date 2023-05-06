const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const adminroutes = require("./Routes1.js/admin");
const shoproutes = require("./Routes1.js/shop");

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/admin',adminroutes);
app.use(shoproutes);


app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found ...</h1>")
})

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);
