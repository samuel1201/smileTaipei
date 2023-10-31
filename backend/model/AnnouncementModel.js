const mongoose = require("mongoose");

//公告model title content image owner
const announcementSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

const AnnouncementModel = mongoose.model("Announcement", announcementSchema);

module.exports = AnnouncementModel;
