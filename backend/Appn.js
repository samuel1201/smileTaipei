const express = require("express");
const app = express();

// http request, GET, POST, PUT, DELETE
app.get("/", (req, res) => {

    res.send("Welcome!");

});

app.post("/users/login", (req, res) => {

    console.log(req.body);

});

// port, callback
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server runs on http://localhost:${PORT}`);
});