const { compare } = require('bcrypt')
const AdminUser = require('../models/adminUser')

exports.signUp = async (req, res) => {
    const { first_name, last_name, email, phone, institution_name, password } = req.body
    try {
        let institute = await AdminUser.findOne({ institution_name })
        if (institute) return res.status(400).json({ message: "Institution already registered" })

        const newUser = new AdminUser({ first_name, last_name, email, phone, institution_name, password })
        await newUser.save()

        res.status(201).json({ message: "User registered successfully" })
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body

        const user = await AdminUser.findOne({email})   
        if(!user){
            return res.status(404).json({message: "User does not exist" })
        }

        if(user.password !== password){
            return res.status(401).json({message: "Invalid Credentials"})
        }

        res.status(200).json({message: "Login Successful", user})
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Error in Controller" })
    }
}