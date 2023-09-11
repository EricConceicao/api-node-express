import db from '../../models/productModel.js';

async function getProduct(req, res) {
    try {
        const { id } = req.body;
        
        if (id !== null) {
            const [rows] = await db.getById(id);
            
            if (rows.length > 0) {
                res.status(200).json({ message: "Product Found!", rows });
            
            } else {
                res.status(404).json({message: 'Product not found'});
            }
        } else {
            res.status(400).json({ message: 'expecify an id'});
        }
    } catch (e) {
        console.error('Error on getProduct controller ' + e);
    }
}

export default getProduct