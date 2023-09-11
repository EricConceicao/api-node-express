import db from '../database/db.js';

async function listUsers() {
    return await db.query('SELECT * FROM users'); 
}

async function getById(id) {
    return await db.query('SELECT name, email FROM users WHERE id = ?', [id]); 
}

async function insertUser(user) {
    const {name, email, password} = user;
    return await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
}

async function updateUser(user) {
    const {id, name, email, password} = user;
    return await db.query('UPDATE users SET name = ?, email = ?, password= ? WHERE id = ?', [name, email, password, id]);
}

async function deleteUser(id) {
    return await db.query('DELETE FROM users WHERE id = ?', [id]);
}

export default {listUsers, getById, insertUser, updateUser, deleteUser}