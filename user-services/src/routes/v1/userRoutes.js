import express from 'express';
import userController from '../../controllers/userController.js';

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile/:userId', userController.getProfile);
router.put('/profile/:userId', userController.updateUser);


export default router;
