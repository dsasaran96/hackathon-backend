import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";

import connectDB from './config/db.js';

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))
