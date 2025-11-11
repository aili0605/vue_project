import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

class Product extends Model {
  static associate(models) {
    Product.belongsTo(models.Brand, { 
      foreignKey: 'brand_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE' 
    });
    Product.belongsTo(models.Category, { 
      foreignKey: 'category_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    Product.hasMany(models.Wishlist, {
      foreignKey: 'product_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  }
}

Product.init({
  name: { type: DataTypes.STRING, allowNull: false },
  brand_id: { type: DataTypes.INTEGER, allowNull: true },
  category_id:{ type: DataTypes.INTEGER, allowNull: true },
  price: DataTypes.DECIMAL,
  currency: DataTypes.STRING,
  url: DataTypes.STRING,
  image_url: DataTypes.STRING,
  description: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'Product',
});

export default Product;
