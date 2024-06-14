const dbPool = require('../../Database/database')

const getAllLogs = () => {
    const sqlQuery =  `SELECT r.id, code, m.id_member, m.name, r.status, r.created_at AS tgl_peminjaman, deadline_at FROM returns r LEFT JOIN members m ON r.id_member = m.id_member`

    return dbPool.execute(sqlQuery)
}

const createLogsReturn = (data) => {
    const date = new Date(data.tanggal_pengembalian)
    date.setDate(date.getDate())
    const tglPengembalian = date.toISOString().slice(0, 10);

    const Deadline = new Date(data.deadline_at)
    Deadline.setDate(Deadline.getDate())
    const deadline_at = Deadline.toISOString().slice(0, 10);

    const sqlQuery = `INSERT INTO returns (code, id_member, status, created_at, deadline_at) VALUES ('${data.code}', '${data.id_member}', '${data.status}', '${tglPengembalian}', '${deadline_at}')`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllLogs,
    createLogsReturn
}