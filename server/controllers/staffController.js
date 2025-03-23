const staffUser = require("../models/staffUser")

exports.staffSignUp = async (req, res) => {
    const {first_name, last_name, email, uuid, password} = req.body
    try{
        let emailExists = await staffUser.findOne({email})
        let uuidExists = await staffUser.findOne({uuid})

        if(emailExists, uuidExists) 
            return res.status(400).json({message:"User already exists"})

        const newUser = new staffUser({first_name, last_name, email, uuid, password})
        await newUser.save()

        res.status(201).json({message:"User registered successfully"})
    } catch(error){
        res.status(500).json({message:"Error in Controller"})
    }
}

exports.staffLogin = async (req, res) => {
    try{
        const { uuid, password} = req.body
        const user = await staffUser.findOne({uuid})

        if(!user){
            return res.status(404).json({message: "User does not exist"})
        }
        if(user.password !== password){
            return res.status(401).json({message: "Invaliid credentials"})
        }
        res.status(200).json({message:"Login Successful"})
    } catch(error) {
        console.error(error)
        return res.status(500).json({message:"Error in Controller"})
    }
}