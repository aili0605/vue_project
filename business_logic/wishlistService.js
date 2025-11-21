// src/services/wishlistService.js
import { wishlistRepository } from "../data_acces/wishlistRepository.js";
import { productRepository } from "../data_acces/productRepository.js";

export const wishlistService = {
  addToWishlist: async (productId, userId) => {
    // Проверяем есть ли продукт
    const product = await productRepository.getById(productId);
    if (!product) throw new Error("Product not found");

    // Создаём запись в wishlist
    const wishlistItem = await wishlistRepository.create({
      product_id: product.id,
      user_id: userId, // если у тебя есть userId
    });

    return { product, wishlistItem };
  },

  getWishlistByUser: async (userId) => {
    return await wishlistRepository.getByUserId(userId);
  },

  removeFromWishlist: async (itemId) => {
    return await wishlistRepository.delete(itemId);
  },
};