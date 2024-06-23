// routes/v1/notificationRoutes.js
import express from 'express';
import notificationController from '../../controllers/notificationController.js';

const router = express.Router();

router.post('/notify', notificationController.sendNotification);

export default router;
