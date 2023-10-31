const Announce = require("../model/AnnouncementModel");
const { newAnnounce } = require("../dao/announceDao");

const createAnnounce = async (req, res, next) => {
    try {
        console.log(req.body);
        await newAnnounce(req.body)
            .then((announce) => {
                res.status(200).json({
                    message: "公告新增成功",
                    announce,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (error) {
        res.status(401).json({
            message: "Something wrong",
            error,
        });
    }
};

const getAllAnnounce = async (req, res, next) => {};
const updateAnnounce = async (req, res, next) => {};
const deleteAnnounce = async (req, res, next) => {};
const getAnnounce = async (req, res, next) => {};

module.exports = { createAnnounce, getAllAnnounce, updateAnnounce, deleteAnnounce, getAnnounce };
