
const conversationModel = require('../modules/entities/conversation_db_module').conversationModel;

getAllConversations = async (req, res) => {
    try {
        const conversations = await conversationModel.find(); 
        res.status(200).json(conversations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

getUserConversations = async (req, res) => {
    try {
        const { userId } = req.params;
        const conversations = await conversationModel.find({ participants: userId });
        res.status(200).json(conversations);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
    
createConversation = async (req, res) => {
    try {
        const { participants } = req.body;
        if (!participants || !Array.isArray(participants) || participants.length < 2) {
            return res.status(400).json({ error: 'Participants array with at least two user IDs is required' });
        }
        const newConversation = await conversationModel.create({ participants });
        res.status(201).json(newConversation);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};


addUserToConversation = async (req, res) => {
    try {
        const { conversationId } = req.params;
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ error: 'userId is required' });
        }
        const conversation = await conversationModel.findById(conversationId);
        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }
        if (conversation.participants.includes(userId)) {
            return res.status(400).json({ error: 'User is already a participant in the conversation' });
        }
        conversation.participants.push(userId);
        await conversation.save();
        res.status(200).json(conversation);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

removeUserFromConversation = async (req, res) => {
    try {
        const { conversationId } = req.params;
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ error: 'userId is required' });
        }
        const conversation = await conversationModel.findById(conversationId);
        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }
        if (!conversation.participants.includes(userId)) {
            return res.status(400).json({ error: 'User is not a participant in the conversation' });
        }
        conversation.participants = conversation.participants.filter(id => id !== userId);
        await conversation.save();
        res.status(200).json(conversation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

deleteConversation = async (req, res) => {
    try {
        const { conversationId } = req.params;
        const conversation = await conversationModel.findByIdAndDelete(conversationId);
        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }
        res.status(200).json({ message: 'Conversation deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllConversations,
    getUserConversations,
    createConversation,
    addUserToConversation,
    removeUserFromConversation,
    deleteConversation
};
