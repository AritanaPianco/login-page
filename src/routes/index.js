import {BrowserRouter,Routes,Route} from "react-router-dom"

import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login"
import Admin from "../pages/Admin"

export default function RoutesApp(){
   return(
     <BrowserRouter>

               <Routes>
                    <Route path="/cadastro" element={<Cadastro/>}/>  
                    <Route path="/" element={<Login/>}/>  
                    <Route path="/admin" element={<Admin/>}/>
                        
               </Routes>
     
     </BrowserRouter>

   )

}