const Message = require("../models/MessageModel");
const asyncHandler = require("express-async-handler");
const { DateTime } = require("luxon");

// Add a new message to database
exports.new_messages = asyncHandler(async (req, res, next) => {
  if (!req.body.user){
    req.body.user = 'Anonymous'
  }
  req.body.date = DateTime.now()
    .setZone("America/New_York")
    .toLocaleString(DateTime.DATETIME_MED);
  const newMessage = await Message.create(req.body);

  res.redirect("/");
});
