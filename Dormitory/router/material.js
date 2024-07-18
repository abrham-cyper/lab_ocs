const {viewMaterial, createMaterial, updateMaterials} = require('../controllers/material')

const express = require('express')
const router = express.Router()

router.route("/").post(createMaterial)
router.route("/:id").patch(updateMaterials).post(viewMaterial)

module.exports = router