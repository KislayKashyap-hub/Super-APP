// services/messageService.js
import { ObjectId } from 'mongodb';

const sendMessage = async ({ senderId, receiverId, message }) => {
    const messageDoc = {
        senderId: new ObjectId(senderId),
        receiverId: new ObjectId(receiverId),
        message,
        createdAt: new Date()
    };
    const result = await global.db.collection('messages').insertOne(messageDoc);
    return result.ops[0];
};

const getMessages = async (userId) => {
    const messages = await global.db.collection('messages').find({
        $or: [{ senderId: new ObjectId(userId) }, { receiverId: new ObjectId(userId) }]
    }).toArray();
    return messages;
};

export default { sendMessage, getMessages };
