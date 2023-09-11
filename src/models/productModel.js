import db from '../database/db.js';

async function listById() {
    return await db.query('SELECT * FROM products');
}

async function getById(id) {
    return await db.query('SELECT name, description, quantity FROM products WHERE id = ?', [id]);
}

async function insertProduct(product) {
    const { name, desc, qtd } = product;
    return await db.query('INSERT INTO products (name, description, quantity) VALUES (?, ?, ?)', [name, desc, qtd]);
}

async function updateProduct(product) {
    const { id, name, desc, qtd } = product;
    return await db.query('UPDATE products SET name = ?, description = ?, quantity = ?', [name, desc, qtd, id]);
}

async function deleteProduct(id) {
    return await db.query('DELETE FROM products WHERE id = ?', [id]);
}

export default {getById, listById, insertProduct, updateProduct, deleteProduct}