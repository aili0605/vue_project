import express from "express";
import { addToWishlist, getWishlistByUser, removeFromWishlist } from "../controllers/wishlistController.js";

const router = express.Router();

router.post("/add", addToWishlist);
router.get("/:userId", getWishlistByUser);
router.delete("/:itemId", removeFromWishlist);

export default router;