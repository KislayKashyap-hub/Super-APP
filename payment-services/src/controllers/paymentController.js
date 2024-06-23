import paymentService from '../services/paymentService.js';

const createPayment = async (req, res) => {
    try {
        const payment = await paymentService.createPayment(req.body);
        res.status(201).json(payment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getPayment = async (req, res) => {
    try {
        const payment = await paymentService.getPayment(req.params.transactionId);
        res.status(200).json(payment);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getBilling = async (req, res) => {
    try {
        const payments = await paymentService.getBilling(req.params.userId);
        res.status(200).json(payments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default { createPayment, getPayment, getBilling };
