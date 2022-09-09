import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))
