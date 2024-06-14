const express = require('express')
const bokingController = require('../src/Controller/BokingController')

const router = express.Router()

router.get('/', bokingController.getDataBokings)
router.post('/', bokingController.bokingBook)


module.exports = router