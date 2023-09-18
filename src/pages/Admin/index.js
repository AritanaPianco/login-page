
import "./admin.css"
import {auth} from "./../../firebaseconnection"
import {signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useState } from "react"



function Admin(){
   const [user,setUser] = useState(true)
   const navigate = useNavigate()


  async function logout(){
      await signOut(auth)  
       setUser(false) 
       navigate("/", { replace: true })  

  }


    return(
     <div className="admin-container">
          <h1>Seja bem vindo admin à sua conta</h1>

          <button onClick={logout}>logout</button>
     </div>
    )
}


export default Admin;