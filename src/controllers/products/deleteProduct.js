import db from '../../models/productModel.js';

async function deleteProduct(req, res) {
    try {
        const { id } = req.body;
        
        if (id !== null) {
            const [rows] = await db.deleteProduct(id);

            if (rows.affectedRows > 0) {
                res.status(200).json({ message: "Product deleted successfully!" });
            
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } else {
            res.status(400).json({ message: 'Expecify an id'});
        }
    } catch (e) {
        console.error('Error on updateProduct controller ' + e);
    }
}

export default deleteProduct