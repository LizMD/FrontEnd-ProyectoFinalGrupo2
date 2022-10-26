import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PerfilUsuario from "./perfilusuario";





export const Recuperar = () => {
    const [email, setEmail] = useState({ email: "" })
    const [usuario, setUsuario] = useState({ password: "password" })

    const bb = (e) => {
        setEmail(
            {
                ...email,
                [e.target.name]: e.target.value
            }
        )
    }
    const clave=()=>{
        
    }
    console.log(email.email)

    return (
        <div>

            {email.email ? (
                <div><div style={{ height: "500px" }} className="container">
                    <form action={"https://formsubmit.co/" + email.email} method="POST">
                        <div class="form-group ">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={bb} />
                            <input name="password" value={usuario.password} type="password" />
                            <h6 >te enviaremos tu password a tu correo</h6>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

                        </div>

                        <button type="submit" class="btn btn-primary" >Submit</button>
                    </form>
                </div>
                </div>
            )
                :
                (

                    <div><div style={{ height: "500px" }} className="container">
                    <form >
                        <div class="form-group ">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" class="btn btn-primary" >Submit</button>
                    </form>
                </div>
                </div>
                )}
        </div>








        /* {email.email?(<div style={{height:"500px"}} className="container">
           <form action={"https://formsubmit.co/"+email.email} method="POST">
     <div class="form-group ">
       <label for="exampleInputEmail1">Email address</label>
       <input type="email" name="email"class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={bb}/>
       <input name="password" value={usuario.password} type="password"/>
       <h6 >te enviaremos tu password a tu correo</h6>
       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       
     </div>
     
     <button type="submit" class="btn btn-primary" >Submit</button>
   </form>
   </div>)
   :
   <div>
   </div>
   
   
   
   } */
    )
}