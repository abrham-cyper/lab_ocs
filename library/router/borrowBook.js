const {checkBorrow,createBorrow, updateBorrow} = require('../controllers/borrowBook')

const express = require('express')
const router = express.Router()

router.route('/').post(createBorrow)
router.route('/:id').patch(updateBorrow).post(checkBorrow)

module.exports = router