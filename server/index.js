import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/database.js";
import authRouter from "./src/routers/auth.js";
import cateRouter from "./src/routers/category.js";
import productRouter from "./src/routers/product.js";
import uploadRouter from "./src/routers/upload.js";
import userRouter from "./src/routers/user.js";
import cartRouter from "./src/routers/cart.js";
import billRouter from "./src/routers/bill.js";

const app = express();
const port = process.env.PORT || 8080;
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
app.use("/api", userRouter);
app.use("/api", cartRouter);
app.use("/api", billRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
