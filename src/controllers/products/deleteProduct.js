function deleteProduct(req, res) {
    const nome = req.params.query

    const PRODUCT = [
        { nome: "bola", qtd: 1, descricao:'Bola redonda de borracha' },
        { nome: "copo", qtd: 3, descricao:'Copo da Coca' },
        { nome: "garrafa", qtd: 7, descricao:'Garrafa de vidro' }
    ];
    const products = PRODUCT.filter( product => product.nome !== nome);

    res.json({ products, message: `Produto ${nome} foi deletado` });
}

export default deleteProduct