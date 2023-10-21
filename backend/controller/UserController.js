const {UserService} = require("../service/UserService.js");
const {User} = require("../model/User.js");

class UserController {

    userService = new UserService();

    register(user) {

        this.userService.createUser(user);

    };

    login() {

    };

};

module.exports.UserController = UserController;