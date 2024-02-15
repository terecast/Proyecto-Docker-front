import axios from 'axios'

const API_URL = 'http://localhost:5001/api/users/'

//Login
const login = async (userData) =>{
    const response = await axios.post(API_URL + 'login', userData)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//Registrar un usuario
const register = async (userData) =>{
    const response = await axios.post(API_URL, userData)
    return response.data
}

//Logout del usuario
const logout = async() => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService