require('dotenv').config();
const mysql = require('mysql2/promise');
let c = '';
async function createDbConnection() {
    try {
        c = await mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        });
        console.info(`[${new Date().toLocaleString()}] INFO | Successfully connected to the database\n------------------------`);
        // Other database operations...
        
        // Close the connection when done
    } catch (err) {
        console.error(err);
        // Optionally log the error to a file or monitoring system...
    }
}

createDbConnection();
const connection = c;
export default  connection;
