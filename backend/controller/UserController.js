const {UserService} = require("../service/UserService.js");
const {User} = require("../model/User.js");

class UserController {

    userService = new UserService();

    register(requestBody) {
        // demo: let user= new User(1, "2", "3", "4");
    };

    login(requestBody) {

    };

};

module.exports.UserController = UserController;