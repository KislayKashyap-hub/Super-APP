import { ObjectId } from 'mongodb';

const addOrder = async (orderData) => {
    const result = await global.db.collection('orders').insertOne(orderData);
    return result.ops[0];
};

const getOrder = async (orderId) => {
    const order = await global.db.collection('orders').findOne({ _id: new ObjectId(orderId) });
    if (!order) {
        throw new Error('Order not found');
    }
    return order;
};

const getAllOrders = async () => {
    return await global.db.collection('orders').find().toArray();
};

export default { addOrder, getOrder, getAllOrders };
