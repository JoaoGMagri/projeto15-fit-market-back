import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI)
try {
    await mongoClient.connect();
    console.log("MongoDB Connected");
} catch (error) {
    console.log(error.message);
}

const db = mongoClient.db("fitMarket");
export const collectionUsers = db.collection("users");
export const collectionSessions = db.collection("sessions");
export const collectionProducts = db.collection("products");
export const collectionCarts = db.collection("carts");
export const collectionBuys = db.collection('buys');