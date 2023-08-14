import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Muitos usuários" });
});

router.post('/', (req, res) => {
    res.json({ message: "MINHA API TAMBÉM ESTÁ ON NO POST" });
});

router.put('/', (req, res) => {
    res.json({ message: "MINHA API TÁ AQUI NO PUT TAMBÉM" });
});

router.delete('/', (req, res) => {
    res.json({ message: "MINHA API ESTÁ ON NO DELETE" });
});

export default router