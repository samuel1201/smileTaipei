const {UserDao} = require("../dao/UserDao.js");

class UserService {

    userDao = new UserDao();

    createUser(userRegisterRequest) {

        return this.userDao.createUser(userRegisterRequest);

    };

    login(userLoginRequest) {

        let userName = userLoginRequest.username;

        return this.userDao.getUserByUsername(userName);

    };

};

module.exports.UserService = UserService;