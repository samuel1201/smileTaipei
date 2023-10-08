const {UserService} = require("../service/UserService.js");
const {User} = require("../model/User.js");

class UserController {

    userService = new UserService();

    register() {
        // demo: let user= new User(1, "2", "3", "4");
    };

    login() {

    };

};

module.exports.UserController = UserController;