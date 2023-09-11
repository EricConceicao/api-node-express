import db from "../../models/userModel.js";

async function listUsers(req, res) {
    try {
        const [rows] = await db.listUsers();

        if(rows.length > 0) {
            res.json({ 
                success: "Listing users",
                user: rows 
            });    
        } else {
            res.status(404).json({ 
                error: "Users not found!", 
            }); 
        }
        
    } catch (e) {
        console.error('Error on listUser function on user controller ', e);
    }
}

export default listUsers