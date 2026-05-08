const express = require("express");
const { getNotifications } = require("../controller/notifications.controller.js");

const router = express.Router();

router.get("/notifications", getNotifications);

module.exports = router