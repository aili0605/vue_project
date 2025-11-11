import express from 'express';
import { 
    addToWishlist,
    getProducts, 
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct  } from '../controllers/wishlistController.js';

const router = express.Router();

router.post("/add", addToWishlist); 
router.get('/', getProducts);
router.get('/all', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


export default router;