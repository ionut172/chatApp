const express = require("express");
const route = express.Router();
const { welcome, getData, postData } = require("../controller/controller");

route.get("/", welcome);
route.get("/room", getData);
route.post("/room", postData);
module.exports = route;
