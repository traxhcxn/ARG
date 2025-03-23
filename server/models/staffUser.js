const mongoose = require("mongoose")

const StaffUser = mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    uuid: {type: String, required: true, unique: true},
    password: {type: String, required: true} 
})

module.exports = mongoose.model("Staff", StaffUser)