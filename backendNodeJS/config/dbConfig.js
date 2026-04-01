import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async() => {
    try {
        const { DB_URL, DB_NAME } = process.env;

        if (!DB_URL || !DB_NAME) {
            throw new Error("Database URL or Name missing");
        }

        await mongoose.connect(DB_URL, {
            dbName: DB_NAME,
        });

        console.log(`✅ MongoDB connected: ${DB_NAME}`);
    } catch (error) {
        console.error("❌ MongoDB error:", error.message);
        process.exit(1);
    }
};

export default connectDB;