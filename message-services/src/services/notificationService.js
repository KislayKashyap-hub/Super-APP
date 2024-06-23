import { ObjectId } from 'mongodb';

const addNotification = async (notificationData) => {
    const { userId, notification, createdAt } = notificationData;
    const notificationDocument = {
        userId: new ObjectId(userId),
        notification,
        createdAt: new Date(createdAt)
    };
    const result = await global.db.collection('notifications').insertOne(notificationDocument);
    return result.ops[0];
};

const getNotifications = async (userId) => {
    const notifications = await global.db.collection('notifications').find({ userId: new ObjectId(userId) }).toArray();
    return notifications;
};

export default { addNotification, getNotifications };
