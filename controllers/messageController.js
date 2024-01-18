const Message = require("../models/MessageModel");
const asyncHandler = require("express-async-handler");

// Display list of all BookInstances.
exports.messages = asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find().exec();

  res.render("index", {
    title: "Messages",
    messages: allMessages,
  });
});