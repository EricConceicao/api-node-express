// Router Imports //
import express from "express";
const router = express.Router();

// Controller Imports //
import authLogin from "../controllers/auth/authLogin.js";
import authLogout from "../controllers/auth/authLogout.js";


router.post('/login', authLogin);

router.post('/logout', authLogout);


export default router