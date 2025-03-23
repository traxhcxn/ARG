import axios from "axios"

const API_URL_SIGNUP = "http://localhost:5000/arg/staff/signup"
const API_URL_LOGIN = "http://localhost:5000/arg/staff/login"

export const staffSignUp = async (staffSignUpData) => {
    try{
        const response = await axios.post(API_URL_SIGNUP, staffSignUpData)
        return response.data
    } catch(error) {
        throw error.response? error.response.data: {message: "Service Error"}
    }
}

export const staffLogin = async (staffSignUpData) => {
    try{
        const request = await axios.post(API_URL_LOGIN, staffSignUpData)
        return request.data
    }catch (error) {
        throw error.request? error.request.data: {message: "Service Error"}
    }
}