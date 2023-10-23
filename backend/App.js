const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve("../frontend", "static")));
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http request, GET, POST, PUT, DELETE
app.post("/users/login", (req, res) => {
    let user = userController.login(req.body);

    res.json(user);
});

// http request, GET, POST, PUT, DELETE
app.post("/users/register", (req, res) => {
    let user = userController.register(req.body);

    res.json(user);
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("../frontend", "index.html"));
});

app.listen(process.env.PORT || 5050, () => console.log("server running"));
