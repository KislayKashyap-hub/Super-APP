import express from "express";
import cors from 'cors';
import 'dotenv/config';
import bodyParser from "body-parser";

import paymentRoute from "./routes/v1/paymentRoutes.js"
import paymentDb from "./database/paymentDb.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', paymentRoute);

app.get('/health', (req, res) => {
    res.send("Payment-service is running");
});

// Connect to database and start server
paymentDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Payment-service listening on ", process.env.PORT);
    });
}).catch(err => {
    console.error("Failed to start server:", err);
});
