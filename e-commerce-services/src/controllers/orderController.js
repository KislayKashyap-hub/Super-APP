import orderService from '../services/orderService.js';

const addOrder = async (req, res) => {
    try {
        const order = await orderService.addOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getOrder = async (req, res) => {
    try {
        const order = await orderService.getOrder(req.params.orderId);
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default { addOrder, getOrder, getAllOrders };
