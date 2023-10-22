const {UserService} = require("../service/UserService.js");
const {UserRegisterRequest} = require("../dto/UserRegisterRequest.js");

class UserController {

    userService = new UserService();

    register(user) {

        let userRegisterRequest = new UserRegisterRequest();

        userRegisterRequest.username = user.username;
        userRegisterRequest.password = user.password;
        userRegisterRequest.nickname = user.nickname;
        userRegisterRequest.avatarUrl = user.avatarUrl;

        return this.userService.createUser(userRegisterRequest);

    };

    login(user) {

    };

};

module.exports.UserController = UserController;