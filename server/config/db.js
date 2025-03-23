const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB connected: ${conn.connection.host}`)
        return conn.connection.db
    } catch(error){
        console.log(`Error lol: ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB