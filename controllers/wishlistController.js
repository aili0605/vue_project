// import { Product } from '../data/wishlistData.js'; 
import db from "../models/index.js";

const Product = db.Product;

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
    const { id } = req.params; // теперь id определён
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
        title: req.body.title,
        price: req.body.price,
        url: req.body.url,
        image_url: req.body.image_url,
        description: req.body.description
};

    var createProduct = await Product.create(productData);
    res.status(201)
                .json(createProduct);
        } catch (error) {
            console.log(error);
            res.status(500)
                .json({
                    statusCode: 500,
                    message: "Internal server error"
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
