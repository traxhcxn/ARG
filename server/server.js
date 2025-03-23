require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

app.use('/arg', require('./routes/contactRoute'))
app.use('/arg/admin', require('./routes/adminRoute'))
app.use('/arg/staff', require('./routes/staffRoute'))
app.use('/institutions', require('./routes/guestRoute'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Connected at ${PORT}?`))