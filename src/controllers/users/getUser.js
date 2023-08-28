import user from "../../models/userModel.js";

async function getUser(req, res) {
    try {
        const userData = req.body;
        const [rows] = await user.getById(userData.id);

        if(rows.length > 0) {
            res.json({ 
                success: "User found!",
                user: rows[0] 
            });    
        } else {
            res.status(404).json({ 
                error: "User not found!", 
            }); 
        }
        
    } catch (e) {
        console.error('Error on getUser function on user controller ', e);
    }
}

export default getUser