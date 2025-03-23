const connectDB = require("../config/db")
async function checkInstitutionExists(req, res) {
    try{
        const db = await connectDB()
        const institution_name = req.params.name

        const institution = await db.collection("admins").findOne({institution_name})

        if(institution) {
            return res.status(200).json({exists: true})
        } else{
            return res.status(404).json({exists: false, message: "Institution Not Found"})
        }
    } catch(error) {
        console.error(error)
        return res.status(500).json({message: "Error in Controller"})
    }
}

module.exports = {checkInstitutionExists}
