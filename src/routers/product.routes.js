// Router imports //
import express from "express";
const router = express.Router();

// Product Controller Imports //
import getProduct from "../controllers/products/getProduct.js";
import deleteProduct from "../controllers/products/deleteProduct.js";
import putProduct from "../controllers/products/putProduct.js";
import postProduct from "../controllers/products/postProduct.js";


router.get('/', getProduct);

router.post('/:query', postProduct);

router.put('/', putProduct);

router.delete('/:query', deleteProduct);


export default router;