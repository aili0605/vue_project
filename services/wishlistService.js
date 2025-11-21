import { WishlistRepository } from "./wishlist.repository.js";
import { ProductService } from "../product/product.service.js";

export const WishlistService = {
    add: async (userId, productId) => {
        const product = await ProductService.getById(productId);

        if (!product) {
            throw new Error("Product does not exist");
        }

        return WishlistRepository.add({ userId, productId });
    },

    getUserWishlist: (id) => WishlistRepository.findUserWishlist(id),
};