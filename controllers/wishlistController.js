// import { Product } from '../data/wishlistData.js'; 
// import { Product } from "../business_logic/productService.js"
import { notificationService } from "../services/notificationService.js";
import { db } from "../models/index.js";

const { Product, Wishlist } = db;

export const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body; // id товара, который добавляем
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const wishlistItem = await Wishlist.create({ product_id: product.id });
    
    res.status(201).json({
      message: `Товар "${product.name}" успешно добавлен в вишлист`,
      wishlistItem
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.log( error);
    res.status(500).json({
        statusCode: 500, 
        error: 'Internal server error' 
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params; 
    const product = await Product.findByPk(id);
    if (!product) {
        return res.status(404).json({
            statusCode: 404,
            message: "Product not found"
        });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({
        statusCode: 500,
        message: "Internal server error"
    });
  }
};


export const createProduct = async (req, res) => {
  try {
    const productData = {
      name: req.body.name,  // ✅ имя должно совпадать с моделью
      price: req.body.price,
      currency: req.body.currency,
      url: req.body.url,
      image_url: req.body.image_url,
      description: req.body.description
    };

    // Создаём продукт через слой сервисов
    const newProduct = await Product.create(productData);

    // (Необязательно, но красиво) — лог уведомления
    notificationService?.sendSuccess?.(`Товар "${newProduct.title}" добавлен в вишлист.`);

    res.status(201).json({
      message: " Товар успешно добавлен в вишлист!",
      product: newProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Product.update(req.body, { where: { id } });

    res.json({ message: 'Updated successfully', updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
        return res.status(404).json({
            statusCode: 404,
            message: "Product not found"
        });
    }
    await product.destroy();
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
        statusCode: 500,
        message: "Internal server error"
    });
  }
};
