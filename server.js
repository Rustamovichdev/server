const express = require("express");

const app = express();

// salom
// salom
// yangi 
app.get("/users", (req, res) => {
    console.log("salom");
});

app.get("/products",(req,res) => {
    console.log(req.query)
})
app.listen(3000, () => {
    console.log("server ishladi!!!");
});
