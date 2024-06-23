import express from 'express';
import productController from '../../controllers/productController.js';

const router = express.Router();

router.post('/products', productController.addProduct);
router.get('/products/:productId', productController.getProduct);
router.get('/products', productController.getAllProducts);
router.put('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);

export default router;
