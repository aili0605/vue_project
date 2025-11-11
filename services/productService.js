import { Product } from "../models/product.js";

export const productService = {
  async create(data) {
    const newProduct = await Product.create(data);
    return newProduct;
  },
};
