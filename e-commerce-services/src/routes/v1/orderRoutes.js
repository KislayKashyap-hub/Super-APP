import express from 'express';
import orderController from '../../controllers/orderController.js';

const router = express.Router();

router.post('/orders', orderController.addOrder);
router.get('/orders/:orderId', orderController.getOrder);
router.get('/orders', orderController.getAllOrders);

export default router;
