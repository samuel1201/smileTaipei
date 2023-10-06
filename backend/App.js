const {UserController} = require("./controller/UserController.js");

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

    };

});

server.listen(PORT, () => {
    console.log(`server runs on http://localhost:${PORT}`);
});