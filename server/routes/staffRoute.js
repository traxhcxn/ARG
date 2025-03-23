const express = require("express")
const { staffSignUp, staffLogin } = require("../controllers/staffController")

const router = express.Router()
router.post('/signup', staffSignUp)
router.post('/login', staffLogin)

module.exports = router