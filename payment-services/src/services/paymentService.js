import { ObjectId } from 'mongodb';

const createPayment = async (paymentData) => {
    const { userId, amount, method } = paymentData;
    const payment = {
        userId: new ObjectId(userId),
        amount,
        method,
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date()
    };
    const result = await global.db.collection('payment').insertOne(payment);
    return result.ops[0];
};

const getPayment = async (transactionId) => {
    const payment = await global.db.collection('payment').findOne({ _id: new ObjectId(transactionId) });
    if (!payment) {
        throw new Error('Transaction not found');
    }
    return payment;
};

const getBilling = async (userId) => {
    const payments = await global.db.collection('payment').find({ userId: new ObjectId(userId) }).toArray();
    return payments;
};

export default { createPayment, getPayment, getBilling };
