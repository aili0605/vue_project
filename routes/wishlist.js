import express from 'express';
import { 
    getProducts, 
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct  } from '../controllers/wishlistController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


export default router;WWWWWW