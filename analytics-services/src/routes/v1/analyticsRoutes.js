import express from 'express';
import analyticsController from '../../controllers/analyticsController.js';

const router = express.Router();

router.post('/analytics', analyticsController.logEvent);
router.get('/analytics/:userId', analyticsController.getAnalytics);

export default router;
