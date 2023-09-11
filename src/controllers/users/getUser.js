import db from "../../models/userModel.js";

async function getUser(req, res) {
    try {
        const userData = req.body;
        const [rows] = await db.getById(userData.id);

        if (rows.length > 0) {
            res.status(200).json({ success: "Users found!", ...rows });
        } else {
            res.status(404).json({ error: "Users not found!" });
        }

    } catch (e) {
        console.error('Error on getUser function on user controller ', e);
    }
}

export default getUser