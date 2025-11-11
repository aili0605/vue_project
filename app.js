import express from "express";
import cors from "cors";
import productRoutes from "./routes/wishlist.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { logger } from "./middlewares/logger.js";

const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());
app.use("/api/products", productRoutes);
app.use(errorHandler);

export default app;