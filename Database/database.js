const mysql = require('mysql2');
require('dotenv').config()

const DB_HOST = process.env.DB_HOST 
const DB_USER = process.env.DB_HOST 
const DB_NAME = process.env.DB_NAME

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_book',
})

module.exports = dbPool.promise()