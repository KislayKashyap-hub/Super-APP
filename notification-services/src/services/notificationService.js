// services/notificationService.js
import { ObjectId } from 'mongodb';

const sendNotification = async (notificationData) => {
    const { userId, message, type } = notificationData;
    const notification = {
        userId: new ObjectId(userId),
        message,
        type,
        status: "Pending", // Pending, Sent, Failed, etc.
        createdAt: new Date(),
        updatedAt: new Date()
    };
    const result = await global.db.collection('notifications_log').insertOne(notification);
    return result.ops[0];
};

export default { sendNotification };
