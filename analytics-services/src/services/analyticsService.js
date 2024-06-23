import { ObjectId } from 'mongodb';

const logEvent = async (eventData) => {
    console.log('Inserting event data:', eventData); // Add logging
    eventData.userId = new ObjectId(eventData.userId); // Ensure userId is an ObjectId
    const result = await global.db.collection('analytics').insertOne(eventData);
    console.log('Inserted event result:', result); // Add logging
    return result.ops[0];
};

const getAnalyticsByUserId = async (userId) => {
    console.log('Fetching analytics for userId:', userId); // Add logging
    const analytics = await global.db.collection('analytics').find({ userId: new ObjectId(userId) }).toArray();
    console.log('Fetched analytics:', analytics); // Add logging
    return analytics;
};

export default { logEvent, getAnalyticsByUserId };
