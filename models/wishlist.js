'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Wishlist.associate = function(models) {
    Wishlist.belongsTo(models.Product, { foreignKey: 'product_id' });
  };

  return Wishlist;
};
