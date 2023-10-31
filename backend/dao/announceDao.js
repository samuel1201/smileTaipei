const Announce = require("../model/AnnouncementModel");
const mongoose = require("mongoose");

//連接mongoose
mongoose
    .connect(
        // "mongodb+srv://dba:AZ123456az@mongodb.ndz8kr0.mongodb.net/mongodb_nodejs_commuityinfoplatform?retryWrites=true&w=majority"
        "mongodb+srv://yatayork:pleasure2258@cluster0.ocxssir.mongodb.net/site?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("connection success!");
    })
    .catch((e) => {
        console.log(e);
    });

//功能

//新增公告
const newAnnounce = async (announce) => {
    // create data

    const newAnnounce = await new Announce(announce);
    const AnnounceSave = await newAnnounce
        .save()
        .then((saveObject) => {
            console.log("save success!");
            return saveObject;
        })
        .catch((err) => {
            console.log(err);
        });
    return AnnounceSave;
};

module.exports = { newAnnounce };
