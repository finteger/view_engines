const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`);
});
