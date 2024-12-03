import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

import cors from "cors";

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "hello,world!",
  });
});

export default app;
