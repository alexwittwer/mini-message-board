const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const MessageSchema = new Schema({
  user: { type: String, minLength: 1, maxLength: 25, default: 'anonymous'},
  text: { type: String, minLength: 1, maxLength: 800 },
  added: { type: String, default: DateTime.now().setZone("America/New_York").toLocaleString(DateTime.DATETIME_MED) },
});

module.exports = mongoose.model("Message", MessageSchema);
