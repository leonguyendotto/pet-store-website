//IMPORT REQUIRED MODULES 
const express= require("express");
const path =require ("path");
const { title } = require("process");


//set up Express objec 
const app = express(); // app is the Express object
const port = process.env.PORT || "8888";

//set up paths to important folders and/or files 
app.set ("views",path.join (__dirname,"views"));
app.set ("view engine","pug");

//CSS and client-side JS are static files 
app.use(express.static(path.join(__dirname,"public")))


//set up some page routes
app.get("/",(req,res)=>{
    res.render("index", {title: "Home"});
});

app.get("/about", (req,res) => {
    res.render("about", {title:"About"})
});

//set up server listenning
app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
});

