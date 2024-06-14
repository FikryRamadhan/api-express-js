const dbPool = require('../../Database/database')

const getAllData = () => {
    const sqlQuery = `SELECT m.id_member, name, email, status, status_sanksi, COUNT(b.id) AS jumlahBuku FROM members m LEFT JOIN booked b ON m.id_member = b.id_member GROUP BY m.id_member, m.name`
    return dbPool.execute(sqlQuery)
}

const createMember = (body) => {
    const sqlQuery = `INSERT INTO members (name, email, status_sanksi) VALUES ('${body.name}', '${body.email}', '${body.status_sanksi}')`

    return dbPool.execute(sqlQuery)
}

const getDataById = (id_member) => {
    const sqlQuery = `SELECT m.id_member, name, email, m.status, status_sanksi,COUNT(b.id) AS jumlahBuku FROM members m LEFT JOIN booked b ON m.id_member = b.id_member WHERE m.id_member='${id_member}'`
    
    return dbPool.execute(sqlQuery)
}

const updateById = (id, status, date,) => {
    const sqlQuery = `UPDATE members SET status='${status}' , status_sanksi='${date}' WHERE id_member='${id}'`
    
    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAllData,
    createMember,
    getDataById,
    updateById,
}