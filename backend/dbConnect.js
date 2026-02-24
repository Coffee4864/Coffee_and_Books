const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.MARIADB_HOST,
  user: process.env.MARIADVB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  port: process.env.MARIADB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, 
  idleTimeout: 60000, 
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

pool.getConnection((err, result) => {
    if(err){
        console.log("Error connecting to the database:", err)
    }else{
        console.log("Successfully connected to the database.")
    }
})

module.exports = pool;