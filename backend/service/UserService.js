const {UserDao} = require("../dao/UserDao.js");

class UserService {

    userDao = new UserDao();

    createUser(user) {

        return this.userDao.createUser(user);

    };

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