const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'B!ank22!3',
        database: 'election'
});


module.exports = db;