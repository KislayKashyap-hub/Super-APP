import express from "express";
import cors from 'cors';
import 'dotenv/config';
import bodyParser from "body-parser";

import productRoute from "./routes/v1/productRoutes.js";
import orderRoute from "./routes/v1/orderRoutes.js";
import connectDb from "./database/db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', productRoute);
app.use('/api/v1', orderRoute);

app.get('/', (req, res) => {
    res.send("E-commerce Service is running..");
});

// Connect to database and start server
connectDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("E-commerce service listening on ", process.env.PORT);
    });
}).catch(err => {
    console.error("Failed to start server:", err);
});
