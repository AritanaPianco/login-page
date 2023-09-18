import {useState} from "react"
import { Link,useNavigate } from "react-router-dom"
import "./login.css"
import {toast} from "react-toastify"

import {auth} from "./../../firebaseconnection"
import {signInWithEmailAndPassword} from "firebase/auth"




export default function Login(){
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("") 
    const navigate = useNavigate()


    async function makeLogin(e){
        e.preventDefault();

       if(email !== "" && senha !== ""){
           await signInWithEmailAndPassword(auth, email, senha)
           .then((response) => {
               navigate("/admin", { replace:true })
            })  
            .catch((err) => {
              toast.warn("Você não possui acesso!") 
              console.log("erro ao logar " + err)
            }) 
            
        }else {
            toast.warn("Preencha todos os campos!")   
        }
        
        setEmail("")
        setSenha("")           
  
    }


    return(
        <div className="container">
            
       
        <form className="form" onSubmit={makeLogin}>
             <label>Email</label>
              <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

              <label>Senha</label>
              <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>


               <button className="btn" type="submit">Logar</button>
               <Link  className="btn" to="/cadastro">Não possui conta? Cadastre-se!</Link>  
         </form>      


        </div>
    )


}