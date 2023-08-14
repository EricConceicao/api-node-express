import express, { query } from "express";

const router = express.Router();

router.get('/', (req, res) => {
    const PRODUCT = [
        { produto: "Bola", qtd: 1, descricao:'Bola redonda de borracha' },
        { produto: "Copo", qtd: 3, descricao:'Copo da Coca' },
        { produto: "Garrafa", qtd: 7, descricao:'Garrafa de vidro' }
    ];
    res.json({ PRODUCT });
});

router.post('/:query', (req, res) => {
    const PRODUCT = [
        { nome: "bola", qtd: 1, descricao:'Bola redonda de borracha' },
        { nome: "copo", qtd: 3, descricao:'Copo da Coca' },
        { nome: "garrafa", qtd: 7, descricao:'Garrafa de vidro' }
    ];

    // Filtra o vetor e retonar um objeto que tenha o nome correspondente
    const product = PRODUCT.filter(query => {
        return query.nome !== req.params.query
    });

    res.json({ product });
});

router.put('/', (req, res) => {
    res.json({ produto: "Bola", qtd: 5, descricao:'Bola quadrada de borracha' });
});

router.delete('/', (req, res) => {
    res.json({ status: "produto: 'bola'. Deletado" });
});

export default router;