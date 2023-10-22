const {UserService} = require("../service/UserService.js");

class UserController {

    userService = new UserService();

    register(user) {

        console.log(user);
        console.log(user.name);

        //this.userService.createUser(user);

        return null;

    };

    login() {

    };

};

module.exports.UserController = UserController;