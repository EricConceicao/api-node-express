// Router imports //
import express from "express";
const router = express.Router();

// Product Controller Imports //
import getProduct from "../controllers/products/getProduct.js";
import deleteProduct from "../controllers/products/deleteProduct.js";
import putProduct from "../controllers/products/putProduct.js";
import postProduct from "../controllers/products/postProduct.js";
import listProduct from "../controllers/products/listProduct.js";

router.get('/list', listProduct)

router.get('/', getProduct);

router.post('/', postProduct);

router.put('/', putProduct);

router.delete('/', deleteProduct);


export default router;