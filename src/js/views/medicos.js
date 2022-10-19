import React, { useState, useEffect, useContext } from "react";
import { Link, useParams,useHistory } from "react-router-dom";
import { CardMedicos } from "../component/cardMedicos";
import { Context } from "../store/appContext";

export const Medicos=()=>{
    /* este codigo es para usar en las paginas privadas */
   /*  const history =useHistory()
    const { store, actions } = useContext(Context);
useEffect(()=>{
    if(localStorage.getItem("Token")){
        alert("deverias tener permiso",
        actions.usuario()
        
        )}
    else{
        history.push("/")
    }

},[]) */
    return (
        <div className="container color1">
        <div className="row">
        <CardMedicos/>
        <CardMedicos/>
        <CardMedicos/>
        <CardMedicos/>
        <CardMedicos/>
        <CardMedicos/>
        {/* 
        {store.medicos.map((obj,index)=>{
            return(
                <CardMedicos
                nombre={obj.name}
                especialidades={especialidades.map(especialidad)=>{
                    {especialidad}
                }
            }
            imagen-url:{obj.img}
                />
            )
        })}
        
        */}



        </div>
        </div>
    )
}