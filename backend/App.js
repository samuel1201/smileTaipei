// import package
const express = require("express");

// import object
const {UserController} = require("./controller/UserController.js");

const app = express();
const userController = new UserController();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// http request, GET, POST, PUT, DELETE
app.post("/users/register", (req, res) => {

    let user = userController.register(req.body);

    res.json(user);

});

app.post("/users/login", (req, res) => {

    let user = userController.login(req.body);

    res.json(user);

});

// query user info
app.get("/users/:userId", (req, res) => {

    console.log(req.params.userId);

});

app.get("*", (req, res) => {

    res.send("頁面不存在！");

});

// port, callback
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server runs on http://localhost:${PORT}`);
});