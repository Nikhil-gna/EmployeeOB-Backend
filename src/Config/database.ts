import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const dbURI = process.env.MONGO_URI;
    if (!dbURI) {
      throw new Error("MONGO_URI is not defined in the .env file");
    }
    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
