import express from 'express';
import rideController from '../../controllers/rideController.js';

const router = express.Router();

router.post('/rides', rideController.createRide);
router.get('/rides/:rideId', rideController.getRide);

export default router;
