import db from '../../models/productModel.js';

async function postProduct(req, res) {
    try {
        const product = req.body;
        
        if (product.name && product.desc && product.qtd) {
            const [rows] = await db.insertProduct(product);
            
            if (rows.affectedRows > 0) {
                res.status(200).json({ message: "Product signed successfully!" });
            
            } else {
                res.status(500).json({message: 'Internal error'});
            }
        } else {
            res.status(400).json({ message: 'Missing entries'});
        }
    } catch (e) {
        console.error('Error on insertProduct controller ' + e);
    }
}

export default postProduct