const ContactForm = require("../models/contactModel")

exports.Contact = async (req, res) => {
    const {contactName, email, content} = req.body
    try{
        const newContactContent = new ContactForm({contactName, email, content})
        await newContactContent.save()
        res.status(201).json({message:"Response received"})
    } catch(error) {
        res.status(500).json({message:"Server Error"})
    }
}