const {UserService} = require("../service/UserService.js");
const {UserRegisterRequest} = require("../dto/UserRegisterRequest.js");
const {UserLoginRequest} = require("../dto/UserLoginRequest.js");

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

        let userLoginRequest = new UserLoginRequest();

        userLoginRequest.username = user.username;
        userLoginRequest.password = user.password;

        return this.userService.login(userLoginRequest);

    };

};

module.exports.UserController = UserController;