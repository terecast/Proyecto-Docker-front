import { useEffect }  from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import TareaForm from '../components/TareaForm'


const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() =>{
    if(!user){
      navigate('/login')

    }
  }, [user, navigate])


  return (
    <>
      <section className="heading">
        
        <h1>Bienvenido {user && user.name}</h1>
        <h2>Dashboard de tareas</h2>

      </section>

      <TareaForm />
    
    
    </>
  )
}

export default Dashboard