import db from '../../models/userModel.js';

async function deleteUser(req, res) {
    try {
        const {id} = req.body;

        if (id) {
            const [rows] = await db.deleteUser(id);
            console.log(rows)

            if (rows.affectedRows > 0) {
                res.status(200).json({ message: "User removed!" }); 
            } else {
                res.status(404).json({ message: "User does not exist" });  
            }
            
        } else {
            res.status(400).json({ message: "Type an id!" });
        }
    } catch (e) {
        console.error('Error on delete user controller ' + e);
    }
    
}

export default deleteUser