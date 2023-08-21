function postProduct(req, res) {
    const PRODUCT = [
        { nome: "bola", qtd: 1, descricao:'Bola redonda de borracha' },
        { nome: "copo", qtd: 3, descricao:'Copo da Coca' },
        { nome: "garrafa", qtd: 7, descricao:'Garrafa de vidro' }
    ];
    PRODUCT.push({ nome: req.params.query, descricao: "não tem", qtd: 1 })

    res.json({ PRODUCT });
}

export default postProduct