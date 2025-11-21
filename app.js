import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { logger } from "./middlewares/logger.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

// Подключаем роутеры
app.use("/api/products", productRoutes);
app.use("/api/wishlist", wishlistRoutes);чч

// Обработчик ошибок
app.use(errorHandler);

export default app;