const Message = require("../models/MessageModel");
const asyncHandler = require("express-async-handler");

// Add a new message to database
exports.new_messages = asyncHandler(async (req, res, next) => {
  const newMessage = await Message.create(req.body);

  res.redirect("/");
});
