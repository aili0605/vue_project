// src/models/wishlist.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Wishlist = sequelize.define("Wishlist", {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Wishlist.associate = (models) => {
  Wishlist.belongsTo(models.Product, { foreignKey: "product_id" });
};