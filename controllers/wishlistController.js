import { wishlistService } from "../business_logic/wishlistService.js";

export const addToWishlist = async (req, res) => {
  try {
    const { productId, userId } = req.body; // userId можно взять из auth
    const { product, wishlistItem } = await wishlistService.addToWishlist(productId, userId);

    res.status(201).json({
      message: `Товар "${product.name}" успешно добавлен в вишлист`,
      wishlistItem,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};

export const getWishlistByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const wishlist = await wishlistService.getWishlistByUser(userId);
    res.json(wishlist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const { itemId } = req.params;
    await wishlistService.removeFromWishlist(itemId);
    res.json({ message: "Item removed from wishlist" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};
