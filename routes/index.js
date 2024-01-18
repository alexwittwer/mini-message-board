const express = require("express");
const dfs = require("date-fns");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: dfs.formatRelative(dfs.subDays(new Date(), 2), new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: dfs.formatRelative(dfs.subDays(new Date(), 3), new Date()),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "BlueBoard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form");
});

router.post("/new", (req, res, next) => {
  const message = req.body;
  console.log(message);
  messages.push({
    text: message.text,
    user: message.user,
    added: dfs.formatRelative(dfs.subDays(new Date(), 0), new Date()),
  });
  res.redirect("/");
});

module.exports = router;
