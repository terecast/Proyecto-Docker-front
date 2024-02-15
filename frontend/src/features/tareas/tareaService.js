import axios from "axios";

const API_URL = 'http://localhost:5001/api/tareas/'

//Crear una Tarea
const crearTarea = async (tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)

    return response.data
}


//Obtener lista de Tarea
const getTareas = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)

    return response.data
}

//Delete tarea
const deleteTareas = async (idtarea, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + idtarea, config)

    return response.data
}


const tareaService = {
    crearTarea,
    getTareas,
    deleteTareas
}

export default tareaService

