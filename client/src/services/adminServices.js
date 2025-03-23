import axios from "axios"

const API_URL_SIGNUP = "http://localhost:5000/arg/admin/signup"
const API_URL_LOGIN = "http://localhost:5000/arg/admin/login"

export const adminSignUp = async (adminData) => {
    try{
        const response = await axios.post(API_URL_SIGNUP, adminData)
        return response.data
    } catch(error){
        throw error.response ? error.response.data : {message: "Service Error"}
    }
}

export const adminLogin = async (adminData) => {
    try{
        const request = await axios.post(API_URL_LOGIN, adminData)
        return request.data
    } catch(error){
        throw error.request ? error.request.data : {message: "Service Error"}
    }
}