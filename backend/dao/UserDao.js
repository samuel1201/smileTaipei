const express = require("express");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const {User} = require("../model/User.js");

// connection database
// local: mongoose.connect("mongodb://localhost:27017/{database}");
mongoose.connect("mongodb+srv://dba:AZ123456az@mongodb.ndz8kr0.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("connection success!");
    })
    .catch((e) => {
        console.log(e);
    });

// 對應到 mongodb 的 collections
let collectionName = "Users"; // mongodb collections

class UserDao {

    createUser(userRegisterRequest) {

        let user = new User();

        const userSchema = new Schema({
            group: String,
            username: String,
            password: String,
            nickname: String,
            avatarUrl: String,
            createdDate: Date,
            lastModifiedDate: Date
        });

        const userModel = mongoose.model(collectionName, userSchema);

        user.group = "VIP";
        user.username = userRegisterRequest.username;
        user.password = userRegisterRequest.password;
        user.nickname = userRegisterRequest.nickname;
        user.avatarUrl = userRegisterRequest.avatarUrl;
        user.createdDate = new Date();
        user.lastModifiedDate = new Date();

        const newObject = new userModel(user);

        // create data
        newObject.save().then((saveObject) => {
            console.log("save success!");
            console.log(saveObject);
        });

        return user;

    };

    getUserByUsername(username) {

        return null;

    };

};

module.exports.UserDao = UserDao;