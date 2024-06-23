// controllers/notificationController.js
import notificationService from '../services/notificationService.js';

const sendNotification = async (req, res) => {
    try {
        const notification = await notificationService.sendNotification(req.body);
        res.status(201).json(notification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default { sendNotification };
