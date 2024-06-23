// app.js
import express from "express";
import cors from 'cors';
import 'dotenv/config';
import bodyParser from "body-parser";

import notificationRoute from "./routes/v1/notificationRoutes.js"
import notificationDb from "./database/notificationDb.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', notificationRoute);

app.get('/notify', (req, res) => {
    res.send("Notification-service.. via GET");
});

// Connect to database and start server
notificationDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Notification-service listening on ", process.env.PORT);
    });
}).catch(err => {
    console.error("Failed to start server:", err);
});
