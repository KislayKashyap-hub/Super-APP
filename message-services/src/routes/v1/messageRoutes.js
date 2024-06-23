// routes/v1/messageRoutes.js
import express from 'express';
import messageController from '../../controllers/messageController.js';

const router = express.Router();

router.post('/messages', messageController.sendMessage);
router.get('/messages/:userId', messageController.getMessages);

export default router;
