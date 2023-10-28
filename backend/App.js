const express = require("express");
const app = express();
const path = require("path");
const reload = require('reload');
const { exec } = require('child_process');

// import object
const { UserController } = require("./controller/UserController.js");

app.set("view engine", "ejs");

app.use("/static", express.static(path.resolve("./frontend", "static")));
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userController = new UserController();

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
    res.sendFile(path.resolve("./frontend", "index.html"));
});

const server = app.listen(process.env.PORT || 5050, () => {
    console.log("server running");
    exec('start http://localhost:5050'); // 打開瀏覽器
});

// Reload code here
reload(app, { verbose: true, port: 5051 }).then(function (reloadReturned) {
    console.log("Reload started, start web server");
}).catch(function (err) {
    console.error('Reload could not start, could not start server/sample app', err);
});
