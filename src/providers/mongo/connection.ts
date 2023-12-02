import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connectMongoDB() {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/mundo`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
