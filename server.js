const express = require("express");

const app = express();

// salom
// salom
app.get("/users", (req, res) => {
    console.log("salom");
});
app.listen(3000, () => {
    console.log("server ishladi!!!");
});
