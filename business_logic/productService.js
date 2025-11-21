// import { productRepository } from "../data_acces/productRepository.js";

// export const productService = {
//     getAll: async () => {
//         return await productRepository.getAll();
//     },

//     getById: async (id) => {
//         const product = await productRepository.getById(id);
//         if (!product) throw new Error( "Product not found" );
//         return product;
//     },

//     create: async (data) => {
//         const  newProduct = await productRepository.create(data);
//     return newProduct;
//   },

//     update: async (id, data) => {
//     return await productRepository.update(id, data);
//   },

//     delete: async (id) => {
//     return await productRepository.delete(id);
//   },
// };
    
import { productRepository } from "../data_acces/productRepository.js";

export const productService = {
    async getAll() {
        return await productRepository.getAll();
    },

    async getById(id) {
        const product = await productRepository.getById(id);
        if (!product) throw new Error("Product not found");
        return product;
    },

    async create(data) {
        if (!data.name || !data.price) {
            throw new Error("Invalid product data");
        }
        return await productRepository.create(data);
    },

    async update(id, data) {
        return await productRepository.update(id, data);
    },

    async delete(id) {
        return await productRepository.delete(id);
    }
};