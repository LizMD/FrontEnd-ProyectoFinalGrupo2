import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Recuperar2=()=>{
    const { store, actions } = useContext(Context);
    const [clave,setClave]=useState("")
    useEffect (()=>{		  
				fetch("https://3000-bairon00-repobackproyec-jalmh95xkc0.ws-us73.gitpod.io/user/"+localStorage.getItem("Email"))
					.then(response => response.json())
					.then(result => setClave(result))
					.catch(error => console.log('error', error));

    },[])
    
   

    return (
        <div><div style={{ height: "500px" }} className="container">
        <form action={"https://formsubmit.co/" + localStorage.getItem("Email")} method="POST">
            <div class="form-group ">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  />
                <input name="password" value={clave} type="password" className="d-none" />
                <h6 >te enviaremos tu password a tu correo</h6>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

            </div>
{clave!==""?
            <button type="submit" class="btn btn-primary" >Submit</button>
            : "cargando..."}
        </form>
    </div>
    </div>

    )
}