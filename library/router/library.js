const {registerLibrary} = require('../controllers/library')

const express = require('express')
const router = express.Router()

router.route("/").post(registerLibrary)

module.exports = router