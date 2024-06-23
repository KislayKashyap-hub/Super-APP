import express from 'express';
import notificationController from '../../controllers/notificationController.js';

const router = express.Router();

router.post('/notifications', notificationController.addNotification);
router.get('/notifications/:userId', notificationController.getNotifications);

export default router;
