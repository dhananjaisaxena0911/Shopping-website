import express from 'express';
import { getCart, updateCart, clearCart } from '../controllers/cartController.js';

const router = express.Router();

router.get('/', getCart);
router.post('/', updateCart);
router.delete('/', clearCart); // Optional clear route

export default router;
