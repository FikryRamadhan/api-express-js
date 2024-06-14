const { response } = require('express')
const Boking = require('../Model/Boking')
const { responseValidate } = require('./response')

/**
 * Validasi Untuk Buku
 */
const createBook = (body, res) => {
    if(!body.code){
        return responseValidate(res, "Code is Required")
    }

    if (!body.name) {
        return responseValidate(res, "Name is Required")
    }

    if (!body.author) {
        return responseValidate(res, "Author is Required")
    }

    if (!body.stock) {
        return responseValidate(res, "Stock is Required")
    }
}

/** 
 * Validasi Untuk Member
*/

const createMember = (body, res) => {
    if (!body.name) {
        return responseValidate(res, "Name is Required")
    }

    if (!body.email) {
        return responseValidate(res, "Email is Required")
    }
}

/**
 *  Validasi Untuk Booking Buku
 */

const createBokingBook = (body, res) => {
    if(!body.code){
        return responseValidate(res, "Code Book is Required")
    }

    if(!body.id_member){
        return responseValidate(res, "Id User is Required")
    }
}

const checkMember = (member, res) => {
    if(!member){
        return responseValidate(res, "User Tidak Di temukan harap daftar")
    }

    if(member.jumlahBuku >= 2){
        return responseValidate(res, "User Sudah Mencapai Maksimal Peminjaman Buku")
    }

    if(member.status != "Tidak"){
        return responseValidate(res, `User Memiliki Sanksi Berupa larangan meminjam buku sampai tanggal ${member.status_sanksi}`)
    }
}

const checkStockBuku = (res, stock) => {
    if(stock == 0){
        return responseValidate(res, "Maaf stock buku kosong")
    }
}

// Validasi Untuk LOGS RETURN
const checkCreateLogs = (res, data) => {
    if(!data.code){
        return responseValidate(res, "Code Book is Required")
    }

    if(!data.id_member){
        return responseValidate(res, "Id User is Required")
    }

    if(!data.tanggal_pengembalian){
        return responseValidate(res, "Date return is Required")
    }
}

const checkBoking = (res, data) => {
    if(!data){
        return responseValidate(res, "Maaf Data Boking Anda Tidak Di Temukan")
    }
}



module.exports = {
    createBook,
    createMember,
    createBokingBook,
    checkMember,
    checkStockBuku,
    checkBoking,
    checkCreateLogs
}