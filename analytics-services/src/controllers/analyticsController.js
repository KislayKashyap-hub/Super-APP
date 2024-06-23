import { ObjectId } from 'mongodb';
import analyticsService from '../services/analyticsService.js';

const logEvent = async (req, res) => {
    try {
        const eventData = {
            ...req.body,
            userId: new ObjectId(req.body.userId), // Ensure userId is an ObjectId
            timestamp: new Date(req.body.timestamp),
        };
        const event = await analyticsService.logEvent(eventData);
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAnalytics = async (req, res) => {
    try {
        const userId = req.params.userId;
        const analytics = await analyticsService.getAnalyticsByUserId(userId);
        res.status(200).json(analytics);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export default { logEvent, getAnalytics };
