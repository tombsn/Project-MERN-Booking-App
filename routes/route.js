const express = require("express");
/**Routes */
const router = express.Router();
const authRoute = require("./auth_route");
const hotelRoute = require("./hotel_routes");
const roomRoute = require("./room_route");
const userRoute = require("./user_routes");

router.use("/auth", authRoute);
router.use("/hotel", hotelRoute);
router.use("/room", roomRoute);
router.use("/user", userRoute);

module.exports = router;