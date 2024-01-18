const express = require("express");
const router = express.Router();
const message_controller = require('../controllers/messageController')
const new_controller = require('../controllers/addMessageController')

/* GET home page. */
router.get("/", message_controller.messages)

router.get("/new", (req, res, next) => {
  res.render("form");
});

router.post("/new", new_controller.new_messages )

module.exports = router;
