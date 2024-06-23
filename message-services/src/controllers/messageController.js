// controllers/messageController.js
import messageService from '../services/messageService.js';

const sendMessage = async (req, res) => {
    try {
        const message = await messageService.sendMessage(req.body);
        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getMessages = async (req, res) => {
    try {
        const messages = await messageService.getMessages(req.params.userId);
        res.status(200).json(messages);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default { sendMessage, getMessages };
