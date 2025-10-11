
const messageModel = require('../modules/entities/message_db_module').messageModel;
const conversationModel = require('../modules/entities/conversation_db_module').conversationModel;

// Create a new message
const sendMessage = async (req, res) => {
    try {
        const conversationId = req.body.conversationId;

        // Check if the conversation exists
        const conversation = await conversationModel.findById(conversationId);

        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }

        const message = await messageModel.create(req.body);
        res.status(201).json(message);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const removeMessage = async (req, res) => {
    try {

        const conversationId = req.body.conversationId;

        // Check if the conversation exists
        const conversation = await conversationModel.findById(conversationId);

        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }

        const message = await messageModel.findByIdAndDelete(req.params.id);

        if (!message) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all messages for a conversation
const getMessagesByConversationId = async (req, res) => {
    try {
        const conversationId = req.params.conversationId;

        // Check if the conversation exists
        const conversation = await conversationModel.findById(conversationId);
        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }

        const messages = await messageModel.find({ conversationId });
        res.status(200).json(messages);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const editMessage = async (req, res) => {
    try {

        const conversationId = req.params.conversationId;

        // Check if the conversation exists
        const conversation = await conversationModel.findById(conversationId);
        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }

        const message = await messageModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!message) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.status(200).json(message);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    sendMessage,
    getMessagesByConversationId,
    removeMessage,
    editMessage
};