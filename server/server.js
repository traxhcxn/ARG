require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

const fs = require('fs');
const uploadDir = './uploads/raw';
const chartDir = './uploads/charts';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
if (!fs.existsSync(chartDir)) fs.mkdirSync(chartDir, { recursive: true });

// Request logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use('/arg', require('./routes/contactRoute'))
app.use('/arg/admin', require('./routes/adminRoute'))
app.use('/arg/staff', require('./routes/staffRoute'))
app.use('/institutions', require('./routes/guestRoute'))
// After other middleware
app.use('/arg/analytics', require('./routes/analyticsRoute'));

// Error handling middleware (add this last)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: err.message
    });
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Connected at ${PORT}?`))