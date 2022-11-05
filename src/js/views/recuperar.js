import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";





export const Recuperar = () => {
     const { store, actions } = useContext(Context);
     const  history = useHistory();
    const [email, setEmail] = useState({email:""})
    const bb = (e) => {
        setEmail(
            {
                ...email,
                [e.target.name]: e.target.value,
                
            }
            
        )
       
    }
    return (
        
        <div>
            <div className="row justify-content-center">
                <div className="col-6">
                    <div><div style={{ width: "300px" }} className="container">
                        <form >
                            <div className="form-group ">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email"  onChange={bb}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={()=>actions.recuperar(email.email,history)} >Submit</button>   
                        </form>
                    </div>
                </div>
                </div>
 
            </div>

                    
                
        </div>

    )
}