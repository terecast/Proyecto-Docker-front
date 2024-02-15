import { useDispatch } from "react-redux"
import {deleteTareas } from '../features/tareas/tareaSlice'

const TareaItem = ({tarea}) => {

    const dispatch = useDispatch()
  return (
    <div className="tarea">
        <div>
            {new Date(tarea.createdAt).toLocaleString('es-MX')}
        </div>
        <h2>{tarea.texto}</h2>
        <button className="close" onClick={()=>dispatch(deleteTareas(tarea._id))}>X</button>
    </div>
  )
}

export default TareaItem