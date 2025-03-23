const express = require("express")
const { checkInstitutionExists } = require("../controllers/guestController")

const router = express.Router()
router.get('/:name',checkInstitutionExists)

module.exports = router