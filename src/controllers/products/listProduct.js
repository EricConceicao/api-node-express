import db from '../../models/productModel.js';

async function listProduct(req, res) {
    try {        
        const [rows] = await db.listById();
        
        if (rows.length > 0) {
            res.status(200).json({ message: "Product Found!", ...rows });
        
        } else {
            res.status(404).json({message: 'Product not found'});
        }
        
    } catch (e) {
        console.error('Error on listProduct controller ' + e);
    }
}

export default listProduct