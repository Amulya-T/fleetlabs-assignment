const express = require("express")

const router = express.Router()

const meidcalController = require('../Controllers/medical')
const transportController = require('../Controllers/transport')

router.get('/medical',meidcalController.getMedicals)
router.get('/transport',transportController.getTransport)

module.exports = router