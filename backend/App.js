// import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const url = require("url");
const http = require("http");

// create object
const {Schema} = mongoose;
const {UserController} = require("./controller/UserController.js");
const {User} = require("./model/User.js");

app.set("view engine", "ejs");

// create http server
const server = http.createServer((req, res) => {

    const {pathname, query} = url.parse(req.url);
    const method = req.method;

    // set response format to json
    res.setHeader("Content-Type", "application/json");

    const userController = new UserController();

    // http request, GET, POST, PUT, DELETE
    if (method == "POST" && pathname == "/users/login") {

        // create response json
        const responseData = {
            message: "GET request msg.",
            timestamp: new Date()
        };

        // response json format
        res.end(JSON.stringify(responseData));

    }
    ;

    if (method == "POST" && pathname == "/users/register") {

        let user = new User();
        user.userId = "2";
        user.group = "Admin";
        user.username = "test";
        user.password = "123";
        user.nickname = "tttt";
        user.avatarUrl = "123.com";

        userController.register(user);

        // create json
        const responseData = {
            message: "GET request msg.",
            timestamp: new Date()
        };

        // response json format
        res.end(JSON.stringify(user));

    }
    ;

});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server runs on http://localhost:${PORT}`);
});