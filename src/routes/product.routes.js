import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    const PRODUCT = [
        { produto: "Bola", qtd: 1, descricao:'Bola redonda de borracha' },
        { produto: "Copo", qtd: 3, descricao:'Copo da Coca' },
        { produto: "Garrafa", qtd: 7, descricao:'Garrafa de vidro' }
    ];
    res.json({ PRODUCT });
});

router.post('/', (req, res) => {
    res.json({ status: 'Recebendo' });
});

router.put('/', (req, res) => {
    res.json({ produto: "Bola", qtd: 5, descricao:'Bola quadrada de borracha' });
});

router.delete('/', (req, res) => {
    res.json({ status: "produto: 'bola'. Deletado" });
});

export default router;