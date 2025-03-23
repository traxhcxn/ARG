const express = require("express")
const { Contact } = require("../controllers/contactController")

const router = express.Router()
router.post('/contact', Contact)
module.exports = router