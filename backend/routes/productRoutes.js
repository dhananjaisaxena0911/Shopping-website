import express from 'express';
import  getProductByCollectionName from '../controllers/collectionConstructors.js';
import { getAllProducts } from "../controllers/productController.js";
import { getProductById } from '../controllers/getProductsbyId.js';

const router =express.Router();

router.get('/collection/:name',getProductByCollectionName);
router.get("/getallproducts",getAllProducts);
router.get("/:id", getProductById);
export default router;