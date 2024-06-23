import express from "express";
import cors from 'cors';
import 'dotenv/config';
import bodyParser from "body-parser";

import connectDb from "./database/db.js";
import rideRoutes from "./routes/v1/rideRoutes.js";
import driverRoutes from "./routes/v1/driverRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', rideRoutes);
app.use('/api/v1', driverRoutes);

app.get('/health', (req, res) => {
    res.send("Ride-booking-service is up and running");
});

// Connect to database and start server
connectDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Ride-booking-service listening on ", process.env.PORT);
    });
}).catch(err => {
    console.error("Failed to start server:", err);
});
