import notificationService from '../services/notificationService.js';

const addNotification = async (req, res) => {
    try {
        const notification = await notificationService.addNotification(req.body);
        res.status(201).json(notification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getNotifications = async (req, res) => {
    try {
        const notifications = await notificationService.getNotifications(req.params.userId);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default { addNotification, getNotifications };
