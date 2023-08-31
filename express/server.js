const express = require("express");
let app = express();
app.get("/",(req,res)=>{
    console.log("fuck u ");
    res
})
app.listen(3000)