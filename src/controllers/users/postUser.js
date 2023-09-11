import db from '../../models/userModel.js';

async function postUser(req, res) {
    try {
        const userInput = req.body;
        if (userInput.name && userInput.email && userInput.password) {
            const [rows] = await db.insertUser(userInput);
            
            if (rows.affectedRows > 0) {
                res.status(201).json({
                    success: 'User signed!'
                });
            } else {
                res.status(500).json({
                    error: 'Internal error'
                })
            } 
        } else {
            res.status(400).json({
                error: 'Error, inputs missing'
            })
        }
    } catch (e) {
        console.error('Error on postUser controller: ', e);
    }
}
export default postUser