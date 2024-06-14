const dbPool = require('../../Database/database')
const { responseValidate } = require('../MyClass/response')
const Member = require('./Member')

const createBooking = (data, deadline) => {
    // membuat data untuk kolom tgl Peminjaman
    let date = new Date();
    date.setDate(date.getDate());
    let tglPeminjaman = date.toISOString().slice(0, 10);

    const sqlQuery = `INSERT INTO booked (code, id_member, created_at, deadline_at) VALUES ('${data.code}', '${data.id_member}', '${tglPeminjaman}', '${deadline}')`

    return dbPool.execute(sqlQuery);
}

const getDataBokings = () => {
    const sqlQuery =  `SELECT b.id, code, m.id_member,  m.name, b.created_at AS tgl_peminjaman, deadline_at FROM booked b LEFT JOIN members m ON b.id_member = m.id_member`

    return dbPool.execute(sqlQuery)
}

const getByCodeAndMember = (code, id_member) => {
    const sqlQuery = `SELECT * FROM booked WHERE code='${code}' AND id_member='${id_member}'`

    return dbPool.execute(sqlQuery);
}

const deleteByCodeAndMember = (code, id_member) => {
    const sqlQuery = `DELETE FROM booked WHERE code='${code}' AND id_member='${id_member}'`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    createBooking,
    getDataBokings,
    getByCodeAndMember,
    deleteByCodeAndMember
}