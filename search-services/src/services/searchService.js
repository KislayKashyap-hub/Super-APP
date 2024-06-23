// src/services/searchService.js

import { getDB } from '../database/searchDb.js';

const searchProducts = async (query) => {
    const db = getDB();
    try {
        const results = await db.collection('products').find({ $text: { $search: query } }).toArray();
        return results;
    } catch (error) {
        console.error('Error performing search:', error);
        throw error;
    }
};

export default { searchProducts };
