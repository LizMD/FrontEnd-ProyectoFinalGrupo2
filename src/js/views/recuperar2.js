import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Recuperar2=()=>{
    const { store, actions } = useContext(Context);
    useEffect (()=>{
        var raw = "";
				var requestOptions = {
					method: 'GET',
					body: raw,
					redirect: 'follow'
				  };
				  
				fetch("https://3000-bairon00-repobackproyec-0cs7sqa6bai.ws-us72.gitpod.io/user/"+localStorage.getItem("Email"))
					.then(response => response.json())
					.then(result => localStorage.setItem("pass",result))
					.catch(error => console.log('error', error));

    },[])
   

    return (
        <div><div style={{ height: "500px" }} className="container">
        <form action={"https://formsubmit.co/" + localStorage.getItem("Email")} method="POST">
            <div class="form-group ">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  />
                <input name="password" value={localStorage.getItem("pass")} type="password" />
                <h6 >te enviaremos tu password a tu correo</h6>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

            </div>

            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>
    </div>

    )
}