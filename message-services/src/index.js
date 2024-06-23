// app.js
import express from "express";
import cors from 'cors';
import 'dotenv/config';
import bodyParser from "body-parser";

import userDb from "./database/userDb.js";
import messageRoutes from "./routes/v1/messageRoutes.js";
import notificationRoutes from "./routes/v1/notificationRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', messageRoutes);
app.use('/api', notificationRoutes);

app.get('/usr', (req, res) => {
    res.send("User-services.. via GET");
});

// Connect to database and start server
userDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("User-service listening on ", process.env.PORT);
    });
}).catch(err => {
    console.error("Failed to start server:", err);
});
