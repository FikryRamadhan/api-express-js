const Return = require('../Model/Return');
const { responseSuccess, responseError } = require('../MyClass/response');
const Boking = require('../Model/Boking')
const validations = require('../MyClass/validation')
const Member = require('../Model/Member')
const Book = require('../Model/Book')

const getAllLogs = async (req, res) => {
    try {
        const [data] = await Return.getAllLogs();

        return responseSuccess(res, data, "Ini adalah logs pemngembalian buku");
    } catch (error) {
        return responseError(res, "Server error")
    }
}

const createLogsReturn = async (req, res) => {
    const body = req.body
    validations.checkCreateLogs(res, body)
    try {
        const [boking] = await Boking.getByCodeAndMember(body.code, body.id_member);

        const dataBoking = boking[0];

        validations.checkBoking(res, dataBoking)

        // Menambahkan stock ke data buku
        const [book] = await Book.getDataByCode(body.code)
        const stock = book[0].stock

        const newStock = stock + 1

        // Mengecek Lebih Dari deadline atau tidak
        let date = new Date(body.tanggal_pengembalian);
        date.setDate(date.getDate())

        const selisihHari = Math.floor((date - dataBoking.deadline_at) / (1000 * 60 * 60 * 24));
        let status = ""
        if (selisihHari > 0) {
            date.setDate(date.getDate() + 3)
            const status_sanksi = date.toISOString().slice(0, 10);

            status = "Sanksi";
            await Member.updateById(body.id_member, "Sanksi", status_sanksi);
        } else {
            status = "Tidak"
        }


        // create data logs returns
        const data = {
            ...body,
            status: status,
            deadline_at: dataBoking.deadline_at
        }

        await Return.createLogsReturn(data)
        
        // save stock
        await Book.updateStockBuku(body.code, newStock);

        // menghapus data booking
        await Boking.deleteByCodeAndMember(body.code, body.id_member)

        return responseSuccess(res, data, "Pengembalian buku berhasil")
    } catch (error) {
        return responseError(res, "Server error");
    }
}

module.exports = {
    getAllLogs,
    createLogsReturn,
}