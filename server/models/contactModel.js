const mongoose = require("mongoose")

const ContactModel = mongoose.Schema({
    contactName: {type: String, required: true},
    email: {type: String, required: true},
    content: {type: String, required: true}
})

module.exports = mongoose.model("Contact", ContactModel)