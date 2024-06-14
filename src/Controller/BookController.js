const { response } = require('express');
const Book = require('../Model/Book');
const { responseSuccess, responseError } = require('../MyClass/response');
const validations = require('../MyClass/validation');

const getAllBooks = async (req, res) => {
    try {
        const [ data ] = await Book.getAll();
        
        return responseSuccess(res, data, "Get all data success")
    } catch (error) {
        return responseError(res, "Server error")
    }
}

const createBook = async (req, res) => {
    const body = req.body;
    await validations.createBook(body, res)
    try {
        await Book.createBook(body)

        return responseSuccess(res, body, "Create Success")
    } catch (error) {
        return responseError(res , "Server error")
    }
    
}

module.exports = {
    getAllBooks,
    createBook,
}