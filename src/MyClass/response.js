const responseSuccess = (res, data, message) => {
    if (!message) {
        message = "Data hasben created"
    }
    if (!data) {
        return res.json({
            message: message,
        })
    }
    return res.json({
        message: message,
        data: data
    })
}

const responseError = (res, error) => {
    return res.status(500).json({
        message: error
    })
}

const responseValidate = (res, message, data) => {
    if(!data){
        return res.status(400).json({
            message: message
        })
    }

    return res.status(400).json({
        message: message,
        data: data
    })
}

module.exports = {
    responseSuccess,
    responseError,
    responseValidate
}