import express from "express";
import cors from 'cors';
import 'dotenv/config';
import bodyParser from "body-parser";

import analyticsRoute from "./routes/v1/analyticsRoutes.js";
import analyticsDb from "./database/analyticsDb.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', analyticsRoute);

app.get('/', (req, res) => {
    res.send("Analytics-service.. via GET");
});

// Connect to database and start server
analyticsDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Analytics-service listening on ", process.env.PORT);
    });
}).catch(err => {
    console.error("Failed to start server:", err);
});
