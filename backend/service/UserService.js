const {UserDao} = require("../dao/UserDao.js");

class UserService {

    userDao = new UserDao();

    createUser() {

        return this.userDao.createUser();

    }

    getUserById(userId) {

        return this.userDao.getUserById();

    };

    getUsers(user) {

        return this.userDao.getUsers();

    };

    updateUser() {

        return this.userDao.updateUser();

    };

};

module.exports.UserService = UserService;