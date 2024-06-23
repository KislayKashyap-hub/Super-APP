// src/controllers/searchController.js

import searchService from '../services/searchService.js';

const search = async (req, res) => {
    try {
        const query = req.query.query;
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        console.log('Received search query:', query);
        const results = await searchService.searchProducts(query);
        res.status(200).json(results);
    } catch (error) {
        console.error('Error in search endpoint:', error.message);
        res.status(500).json({ error: 'Error performing search. Please try again later.' });
    }
};

export { search };
