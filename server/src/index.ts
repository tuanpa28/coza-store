import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database";
import authRouter from "./routers/auth";
import cateRouter from "./routers/category";
import productRouter from "./routers/product";
import uploadRouter from "./routers/upload";

const app = express();
dotenv.config();

// connect database
connectDB(process.env.MONGO_URL || "");

// middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// routes
app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", cateRouter);
app.use("/api", uploadRouter);

export const viteNodeApp = app;
