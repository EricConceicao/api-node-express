import user from '../../models/userModel.js';

async function postUser(req, res) {
    try {
        const userInput = req.body;
        if (userInput.name && userInput.email && userInput.password) {
            const [rows] = await user.insertUser(userInput);
            
            if (rows.affectedRows > 0) {
                res.status(201).json({
                    success: 'User signed!'
                });
            } else {
                res.status(400).json({
                    error: 'Error, inputs missing'
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