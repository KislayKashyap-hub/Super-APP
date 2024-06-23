import express from 'express';
import paymentController from '../../controllers/paymentController.js';

const router = express.Router();

router.post('/payment', paymentController.createPayment);
router.get('/payment/:transactionId', paymentController.getPayment);
router.get('/billing/:userId', paymentController.getBilling);

export default router;