import express from "express";
import cors from 'cors';
import 'dotenv/config';
import bodyParser from "body-parser";

import userRoute from "./routes/v1/userRoutes.js"
import userDb from "./database/userDb.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoute);

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
