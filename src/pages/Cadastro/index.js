import { useState } from "react"
import { Link } from "react-router-dom"
import {toast} from "react-toastify"

import {auth} from "./../../firebaseconnection"
import {createUserWithEmailAndPassword} from "firebase/auth"




export default function Cadastro(){
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")    
       

 async function makeCadastro(e){
       e.preventDefault(); 

     if(email !== "" && senha !== ""){
         await createUserWithEmailAndPassword(auth,email,senha)
         .then((response) => {
              toast.success("CADASTRADO(A) COM SUCESSO!") 
              setEmail("") 
              setSenha("") 
         })
         .catch((erro) => {
             if(erro.code === "auth/weak-password"){
                 toast.warn("SENHA MUITO FRACA!")
             }else if(erro.code === "auth/email-already-in-use"){
                 toast.warn("ESSE EMAIL JÁ EXISTE!")   
             }   
         })
     }else{
       toast.warn("PREENCHA TODOS OS CAMPOS!")
     }

       
       
 }
    
   


 
   return(
    <div className="container">
            
    <h1>Participe do nosso time!</h1>
      <form className="form" onSubmit={makeCadastro}>
         <label>Email</label>
         <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

         <label>Senha</label>
         <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>


        <button type="submit" className="btn">Cadastrar</button>
        <Link className="btn" to="/">Já possui conta? faça Login!</Link>  
    </form>      


</div>

   )


}