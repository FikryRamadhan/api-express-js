const Member = require('../Model/Member')
const { responseSuccess, responseError } = require('../MyClass/response');

const getAllMembers = async(req, res) => {
    try{
        const [members] = await Member.getAllData();
        
        return responseSuccess(res, members, "Ini Semua Adalah Data Member Kita")
    }catch (error) {
        return responseError(res, "Server error")
    }
}

const createMember = async (req, res) => {
    const body = req.body
    try{
        await Member.createMember(body)

        return responseSuccess(res, body, "Create data success")
    } catch (error){
        return responseError(res, "Server error")
    }
}

module.exports = {
    getAllMembers,
    createMember
}