const express = require("express");

const app = express();

app.use(express.json());

// salom
// salom
// yangi
app.get("/users", (req, res) => {
    console.log("salom");
});

app.get("/products", (req, res) => {
    console.log(req.query);
});

// routing middleware
app.get("/path", (req, res, next) => {});

// req => clent tomonidan keladigan ma'lumot
// res => server qaytaradigan javob
// next() => keyingi function

// req =>

// req.params => dinamik ko'rinishdagi data
// req.query  =>  so'rovlar (page)
// req.body
// req.headers
// req.method
// req ....

// res.send => lyuboy data
// res.json =>
// res.status =>

app.get("/users/:username/:age", (req, res) => {
    const { username, age } = req.params;
    console.log(username, age);
    // "56"
});

app.get("/insta", (req, res) => {
    const { isActive, page, search } = req.query;

    if (isActive === "true") {
        res.send("success");
    } else {
        res.send("no fallow");
    }
});

// body

// req.body => clent bizga yuborgan ma'lumot

app.post("/list", (req, res) => {
    const data = req.body;
    // age string Number("18")
    if (+data.age > 40) {
        res.send("Sizga mumkun!!!!");
    } else {
        res.send("Mumkun emasss!!!!");
    }
});

app.listen(3000, () => {
    console.log("server ishladi!!!");
});

// localhost:3000/routing
