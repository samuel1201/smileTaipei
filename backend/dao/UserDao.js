// const express = require("express");
// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const { User } = require("../model/User.js");

// // connection database
// // local: mongoose.connect("mongodb://localhost:27017/{database}");
// mongoose
//     .connect(
//         // "mongodb+srv://dba:AZ123456az@mongodb.ndz8kr0.mongodb.net/mongodb_nodejs_commuityinfoplatform?retryWrites=true&w=majority"
//         "mongodb+srv://yatayork:pleasure2258@cluster0.ocxssir.mongodb.net/test?retryWrites=true&w=majority"
//         )
//     .then(() => {
//         console.log("connection success!");
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// // 對應到 mongodb 的 collections
// let collectionName = "Users"; // mongodb collections

// class UserDao {
//     createUser(userRegisterRequest) {
//         let user = new User();

//         const userSchema = new Schema({
//             group: String,
//             username: String,
//             password: String,
//             nickname: String,
//             avatarUrl: String,
//             createdDate: Date,
//             lastModifiedDate: Date,
//         });

//         const userModel = mongoose.model(collectionName, userSchema);

//         user.group = "General";
//         user.username = userRegisterRequest.username;
//         user.password = userRegisterRequest.password;
//         user.nickname = userRegisterRequest.nickname;
//         user.avatarUrl = userRegisterRequest.avatarUrl;
//         user.createdDate = new Date();
//         user.lastModifiedDate = new Date();

//         const newObject = new userModel(user);

//         // create data
//         newObject.save().then((saveObject) => {
//             user = saveObject;
//         });

//         return user;
//     }

//     getUserByUsername(userName) {
//         let user = new User();

//         const userSchema = new Schema({
//             group: String,
//             username: String,
//             password: String,
//             nickname: String,
//             avatarUrl: String,
//             createdDate: Date,
//             lastModifiedDate: Date,
//         });

//         const userModel = mongoose.model(collectionName, userSchema);

//         userModel.find({ username: userName }).then((data) => {
//             return data[0];
//         });

//         return userModel;
//     }
// }

// module.exports.UserDao = UserDao;
