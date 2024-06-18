const Booking = require('../Model/Boking')
const Book = require('../Model/Book')
const validations = require('../MyClass/validation')
const Member = require('../Model/Member')
const { responseError, responseSuccess, responseValidate } = require('../MyClass/response')

const getDataBokings = async (req, res) => {

    try{
        const [data] = await Booking.getDataBokings();

        return responseSuccess(res, data, "Data Boking Buku");
    } catch (error){
        return responseError(res, "Server error")
    }
    
}

const bokingBook = async (req, res) => {
    const body = req.body
    validations.createBokingBook(body, res)
    try {
        const [dataMember] = await Member.getDataById(body.id_member)
        if(!dataMember[0].id_member){
            return responseValidate(res, "Data Member Tidak Di Temukan", null)
        }

        let member = dataMember[0];

        // Mengambil data stock buku 
        const [book] = await Book.getDataByCode(body.code)

        if(!book[0]){
            return responseValidate(res, "Data Buku Tidak Ada", null)
        }

        const stockOld = book[0].stock
                
        // untuk mengecek ada sanksi / tidak,mengecek jumlah buku per members dan mengupdate jika sudah habis masa sanksi nya
        let date = new Date();
        date.setDate(date.getDate() + 3);
        date.toISOString().slice(0, 10);
        const selisihHari = Math.floor((member.status_sanksi - date) / (1000 * 60 * 60 * 24));

        if(selisihHari < 0){
            await Member.updateById(member.id_member, "Tidak", "0000-00-00") 
            const [dataMemberUpdate] =  await Member.getDataById(body.id_member)
            member = dataMemberUpdate[0]
        }

        validations.checkMember(member, res)

        //  untuk mengecek stock buku ada atau tidak
        if(stockOld == 0){
            return responseValidate(res, "Maaf stock buku kosong", null)
        }

        const newStock = stockOld - 1
        // Update Stock baru
        await Book.updateStockBuku(body.code, newStock)
        
        // Mengambil +7 dari sekarang untuk deadline Format YYYY-MM-DD
        let tanggalSekarang = new Date();
        tanggalSekarang.setDate(tanggalSekarang.getDate() + 7);
        let tanggalPlus3 = tanggalSekarang.toISOString().slice(0, 10);

        // Menyimpan Data Boking Buku
        await Booking.createBooking(body, tanggalPlus3)

        const data = {
            ...body,
            pengembalian: tanggalPlus3
        }
        return responseSuccess(res, data, "Peminjaman Buku Berhasil");
    } catch (error) {
        return responseError(res, "Server Error")
    }
}

module.exports = {
    bokingBook,
    getDataBokings
}
