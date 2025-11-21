// src/data_acces/wishlistRepository.js
import { Wishlist } from "../models/wishlist.js";

export const wishlistRepository = {
  create: (data) => Wishlist.create(data),
  getByUserId: (userId) => Wishlist.findAll({ where: { user_id: userId } }),
  delete: (id) => Wishlist.destroy({ where: { id } }),
};