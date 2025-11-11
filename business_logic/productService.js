import { productRepository } from "../data_acces/productRepository.js";

export const productService = {
    getAll: async () => {
        return await productRepository.getAll();
    },

    getById: async (id) => {
        const product = await productRepository.getById();
        if (!product) throw new Error( "Product not found" );
        return product;
    },

    create: async (data) => {
        const  newProduct = await productRepository.create(data);
    return newProduct;
  },

    update: async (id, data) => {
    return await productRepository.update(id, data);
  },

    delete: async (id) => {
    return await productRepository.delete(id);
  },
};
    