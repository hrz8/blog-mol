const mysql = require('mysql2');
const config = require('../knexfile')[process.env.NODE_ENV || 'development'];

const conn = mysql.createConnection({
    host: config.connection.host,
    port: config.connection.port,
    user: config.connection.user,
    password: config.connection.password
});

if (process.argv[2] === 'create') {
    conn.connect((err) => {
        if (err) throw err;
        conn.query(`CREATE DATABASE IF NOT EXISTS ${config.connection.database}`, error => {
            if (error) throw error;
            console.log("Database created!");
            conn.end();
        });
    });
}

if (process.argv[2] === 'drop') {
    conn.connect((err) => {
        if (err) throw err;
        conn.query(`DROP DATABASE IF EXISTS ${config.connection.database}`, error => {
            if (error) throw error;
            console.log("Database dropped!");
            conn.end();
        });
    });
}
