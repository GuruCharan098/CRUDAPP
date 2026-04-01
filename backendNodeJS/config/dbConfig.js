import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async() => {
    try {
        const { DB_URL, DB_NAME } = process.env;

        if (!DB_URL || !DB_NAME) {
            throw new Error("Database URL or Name is not defined in environment variables.");
        }

        await mongoose.connect(DB_URL, {
            dbName: DB_NAME,
            retryWrites: true,
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            maxPoolSize: 10,
        });

        console.log(`✅ MongoDB connected successfully to database: ${DB_NAME}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectDB;