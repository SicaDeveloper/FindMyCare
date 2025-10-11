const mongoose = require('mongoose');
const messageJson = require("../../schema/entities/app_message.json");

// Create schemas
const messageSchema = new mongoose.Schema(messageJson);

const messageModel = mongoose.model("message", messageSchema);
module.exports = { messageModel };