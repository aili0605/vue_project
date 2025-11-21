import { productService } from "../business_logic/productService.js"
import { notificationService } from "../services/notificationService.js";


export const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getById(id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const productData = {
      name: req.body.name,
      price: req.body.price,
      currency: req.body.currency,
      url: req.body.url,
      image_url: req.body.image_url,
      description: req.body.description,
    };

    const newProduct = await productService.create(productData);

    notificationService?.sendSuccess?.(`Товар "${newProduct.name}" добавлен в вишлист.`);

    res.status(201).json({ message: "Товар успешно добавлен!", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ statusCode: 500, message: "Internal server error", error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.update(id, req.body);
    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.delete(id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};