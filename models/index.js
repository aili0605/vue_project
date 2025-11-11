import { sequelize } from "../config/db.js";
import Product from "./product.js";

// db object
const db = {};
db.Product = Product;
db.sequelize = sequelize;

export { db, sequelize };
