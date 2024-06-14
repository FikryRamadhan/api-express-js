const logRequest = (req, res, next) => {
    console.log(`Terjadi Reqwuest ke PATH : ${req.path}`);
    next();
}

module.exports = logRequest