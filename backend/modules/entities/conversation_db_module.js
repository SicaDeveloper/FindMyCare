const mongoose = require('mongoose');
const conversationJson = require("../../schema/entities/app_conversation.json");

// Create schemas
const conversationSchema = new mongoose.Schema(conversationJson);

const conversationModel = mongoose.model("conversation", conversationSchema);
module.exports = { conversationModel };