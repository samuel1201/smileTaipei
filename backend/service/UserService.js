const {UserDao} = require("../dao/UserDao.js");

class UserService {

    userDao = new UserDao();

    createUser(userRegisterRequest) {

        // let username = this.getUserByUsername(userRegisterRequest.username);
        //
        // if (username != null) {
        //     // username 重複
        // }

        return this.userDao.createUser(userRegisterRequest);

    };

    getUserByUsername(username) {

        return this.userDao.getUserById();

    };

};

module.exports.UserService = UserService;