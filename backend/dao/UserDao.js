const express = require("express");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const {User} = require("../model/User.js");

// connection database
// local: mongoose.connect("mongodb://localhost:27017/{database}");
mongoose.connect("mongodb+srv://dba:AZ123456az@mongodb.a1hsdac.mongodb.net/mongodb_commuityinfohub")
    .then(() => {
        console.log("connection success!");
    })
    .catch((e) => {
        console.log(e);
    });

// 對應到 mongodb 的 collections
let collectionName = "User"; // mongodb collections

class UserDao {

    createUser(user) {

        // declare schema
        const userSchema = new Schema({
            username: String,
            password: String,
        });

        const userModel = mongoose.model(collectionName, userSchema);

        user.createdDate = new Date();
        user.lastModifiedDate = new Date();

        const newObject = new userModel(user);

        // create data
        newObject.save().then((saveObject) => {
            console.log("save success!");
            console.log(saveObject);
        });

        return "使用者創建完成";

    };

    getUserById(userId) {

        return null;

    };

    getUserByUsername(userLoginRequest) {

        return null;

    };

    getUsers(user) {

        return null;

    };

    updateUser() {

        return null;

    };

};

module.exports.UserDao = UserDao;