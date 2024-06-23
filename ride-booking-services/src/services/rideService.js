import { ObjectId } from 'mongodb';

const createRide = async (rideData) => {
    const result = await global.db.collection('rides').insertOne(rideData);
    return result.ops[0];
};

const getRide = async (rideId) => {
    const ride = await global.db.collection('rides').findOne({ _id: new ObjectId(rideId) });
    if (!ride) {
        throw new Error('Ride not found');
    }
    return ride;
};

export default { createRide, getRide };
