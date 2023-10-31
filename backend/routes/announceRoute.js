const announceRoute = require("express").Router();
const {
    createAnnounce,
    getAllAnnounce,
    updateAnnounce,
    deleteAnnounce,
    getAnnounce,
} = require("../controller/announceController");

announceRoute.post("/", createAnnounce); //新增貼文
announceRoute.get("/", getAllAnnounce);
announceRoute.get("/:userId", getAnnounce);
announceRoute.put("/:announceId", updateAnnounce);
announceRoute.delete("/:announceId", deleteAnnounce);

module.exports = announceRoute;
