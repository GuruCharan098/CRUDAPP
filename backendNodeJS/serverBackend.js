import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';
import userRoutes from './backendRouter/UserRouter.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ FIX: match frontend API → /api/users
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});