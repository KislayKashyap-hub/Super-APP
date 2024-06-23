// src/index.js

import express from 'express';
import { connectDB } from './database/searchDb.js';
import searchRoutes from './routes/v1/searchRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5047;

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', searchRoutes);

// Start the server
const startServer = async () => {
    try {
        await connectDB();
        console.log('MongoDB connected. Starting server...');
        app.listen(PORT, () => {
            console.log(`Search-service listening on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB and starting server:', error);
    }
};

startServer();
