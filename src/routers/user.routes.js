// Router Imports //
import express from "express";
const router = express.Router();

// Controller Imports //
import getUser  from "../controllers/users/getUser.js";
import postUser from "../controllers/users/postUser.js";
import putUser from "../controllers/users/putUser.js";
import deleteUser from "../controllers/users/deleteUser.js";


router.get('/', getUser);

router.post('/', postUser);

router.put('/', putUser);

router.delete('/', deleteUser);


export default router