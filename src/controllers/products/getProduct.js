function getProduct() {
    const PRODUCT = [
        { produto: "Bola", qtd: 1, descricao:'Bola redonda de borracha' },
        { produto: "Copo", qtd: 3, descricao:'Copo da Coca' },
        { produto: "Garrafa", qtd: 7, descricao:'Garrafa de vidro' }
    ];
    
    res.json({ PRODUCT });
}

export default getProduct