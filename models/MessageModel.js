const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: { type: String, maxLength: 25, default: "Anonymous" },
  text: { type: String, minLength: 1, maxLength: 800 },
  added: { type: String },
});

module.exports = mongoose.model("Message", MessageSchema);
