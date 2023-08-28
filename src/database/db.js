import db from 'mysql2/promise';
// Config imports
import { DB_HOST, DB_USER, DB_PASS, DB_DATABASE } from '../config.js';

const pool = await db.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool