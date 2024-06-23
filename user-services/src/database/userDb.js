import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config';

const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function userDb() {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        global.db = db; // Use global variable to store the db connection
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

export default userDb;
