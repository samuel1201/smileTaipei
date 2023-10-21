const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {Schema} = mongoose;
const url = require('url');

app.set("view engine", "ejs");

const {UserController} = require("./controller/UserController.js");

const {User} = require("./model/User.js");

const http = require("http");

const PORT = 3000;

// create http server
const server = http.createServer((req, res) => {

    const {pathname, query} = url.parse(req.url);
    const method = req.method;

    // set response format to json
    res.setHeader("Content-Type", "application/json");

    const userController = new UserController();

    // set
    if (method == "GET" && pathname == "/users/login") {

        // create json
        const responseData = {
            message: "GET request msg.",
            timestamp: new Date()
        };

        // response json format
        res.end(JSON.stringify(responseData));

    }
    ;

    if (method == "GET" && pathname == "/users/register") {

        let user = new User();
        user.userId = "1";
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

server.listen(PORT, () => {
    console.log(`server runs on http://localhost:${PORT}`);
});