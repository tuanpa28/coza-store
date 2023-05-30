import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/database";
import authRouter from "./src/routers/auth";
import cateRouter from "./src/routers/category";
import productRouter from "./src/routers/product";
import uploadRouter from "./src/routers/upload";

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
