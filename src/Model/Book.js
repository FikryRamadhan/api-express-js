const dbPool= require('../../Database/database');

const getAll = () => {
    const sqlQuery = "SELECT * FROM book WHERE stock > 0"
    return dbPool.execute(sqlQuery)
}

const createBook = (body) => {
    const sqlQuery =`INSERT INTO book (code, name, author, stock) VALUES ('${body.code}', '${body.name}', '${body.author}', '${body.stock}')`
    return dbPool.execute(sqlQuery);
}

const getDataByCode = (code) => {
    const sqlQuery =  `SELECT stock FROM book WHERE code='${code}'`
    return dbPool.execute(sqlQuery)
}

const updateStockBuku = (code, stock) => {
    const sqlQuery = `UPDATE book SET stock='${stock}' WHERE code='${code}'` 
    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAll,
    createBook,
    getDataByCode,
    updateStockBuku
}