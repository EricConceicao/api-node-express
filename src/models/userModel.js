import db from '../database/db.js';

async function listUsers() {
    return await db.query('SELECT id, name, email, photo FROM users'); 
}

async function getById(id) {
    return await db.query('SELECT name, email, photo FROM users WHERE id = ?', [id]); 
}

async function insertUser(user) {
    const {name, email, password, photo} = user;
    return await db.query('INSERT INTO users (name, email, password, photo) VALUES (?, ?, ?, ?)', [name, email, password, photo]);
}

async function updateUser(user) {
    const {id, name, email, password, photo} = user;
    return await db.query('UPDATE users SET name = ?, email = ?, password= ?, photo=? WHERE id = ?', [name, email, password, photo, id]);
}

async function deleteUser(id) {
    return await db.query('DELETE FROM users WHERE id = ?', [id]);
}

export default {listUsers, getById, insertUser, updateUser, deleteUser}