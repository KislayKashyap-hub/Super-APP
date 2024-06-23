import express from 'express';
import driverController from '../../controllers/driverController.js';

const router = express.Router();

router.post('/drivers', driverController.createDriver);
router.get('/drivers', driverController.getDrivers);

export default router;
