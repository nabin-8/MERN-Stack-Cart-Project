import express from 'express';
import { createProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.route('/post').post(createProduct);
router.route('/post/:id').delete(deleteProduct);

export default router;