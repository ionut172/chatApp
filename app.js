const express = require("express");
const ejs = require("ejs");
const socket = require("socket.io");

const app = express();
const routeChat = require("./routes/routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("/public"));
app.use("/", routeChat);

app.set("view engine", "ejs");
let PORT = 3500;

app.listen(PORT, () => {
  console.log("Server is on");
});
