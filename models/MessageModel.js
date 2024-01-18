const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user: {type: String, minLength: 1, maxLength: 25},
    text: {type: String, minLength: 1, maxLength: 800},
    added: {type: Date}
})

module.exports = mongoose.model("Message", MessageSchema);
