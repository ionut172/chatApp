const welcome = (req, res) => {
  res.render("../public/index");
};
const getData = (req, res) => {
  res.render("../public/room");
};
const postData = (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const roomname = req.body.roomname;

  res.redirect(`/room?username=${username}&roomname=${roomname}`);
};
module.exports = { welcome, getData, postData };
