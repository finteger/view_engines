const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/home", (req, res)=> {
  res.render("index");
});

app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`);
});
