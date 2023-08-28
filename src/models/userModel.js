import db from '../database/db.js';

async function getById(id) {
    return await db.query('SELECT name, email FROM users WHERE id = ?', [id]); 
}

async function insertUser(user) {
    const {name, email, password} = user;
    return await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
}

export default {getById, insertUser}