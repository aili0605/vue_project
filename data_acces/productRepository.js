import  Product  from "../models/product.js";

export const productRepository = {
    getAll: () => Product.findAll(),
    getById: (id) => Product.findByPk(id),
    create: (data) => Product.create(data),
    update: (id, data) => Product.update(data, {where: { id } }),
    delete: (id) => Product.destroy({ where: {id} }),
};  