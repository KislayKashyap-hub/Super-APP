import productService from '../services/productService.js';

const addProduct = async (req, res) => {
    try {
        const product = await productService.addProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await productService.getProduct(req.params.productId);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.productId, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        await productService.deleteProduct(req.params.productId);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export default { addProduct, getProduct, getAllProducts, updateProduct, deleteProduct };
