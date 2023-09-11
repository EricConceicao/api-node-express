import db from '../../models/userModel.js';

async function putUser(req, res) {
    try {
        const user = req.body;

        if (user) {
            const [rows] = await db.updateUser(user);
            console.log(rows)

            if (rows.affectedRows > 0) {
                res.status(200).json({ message: "Update done successfully" });

            } else {
                res.status(500).json({ message: "Error on update" }); 
            }
        }
    } catch (e) {
        console.error('Error on userUpdate controller ' + e);
    }
    
}

export default putUser