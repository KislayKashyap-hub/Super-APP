import { ObjectId } from 'mongodb';

const addProduct = async (productData) => {
    const result = await global.db.collection('products').insertOne(productData);
    return result.ops[0];
};

const getProduct = async (productId) => {
    const product = await global.db.collection('products').findOne({ _id: new ObjectId(productId) });
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

const getAllProducts = async () => {
    return await global.db.collection('products').find().toArray();
};

const updateProduct = async (productId, updateData) => {
    const result = await global.db.collection('products').findOneAndUpdate(
        { _id: new ObjectId(productId) },
        { $set: updateData },
        { returnOriginal: false }
    );
    if (!result.value) {
        throw new Error('Product not found');
    }
    return result.value;
};

const deleteProduct = async (productId) => {
    const result = await global.db.collection('products').deleteOne({ _id: new ObjectId(productId) });
    if (result.deletedCount === 0) {
        throw new Error('Product not found');
    }
    return result;
};

export default { addProduct, getProduct, getAllProducts, updateProduct, deleteProduct };
