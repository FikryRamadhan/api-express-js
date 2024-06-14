const express = require('express')
const returnController = require('../src/Controller/ReturnController')

const router = express.Router()

router.get('/', returnController.getAllLogs)

router.post('/', returnController.createLogsReturn)

module.exports = router