const {viewAvilableCapacity,studentGetsOutOfTheLibrary,studentGetsToTheLibrery} = require('../controllers/spaceInLibrary')

const express = require('express')
const router = express.Router()
router.route('/avilable/:id').post(viewAvilableCapacity)
router.route('/getin/:id').post(studentGetsToTheLibrery)
router.route('/getout/:id').post(studentGetsOutOfTheLibrary)

module.exports = router