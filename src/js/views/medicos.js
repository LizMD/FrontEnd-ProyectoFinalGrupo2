import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CardMedicos } from "../component/cardMedicos";
import { Context } from "../store/appContext";
import {Especie} from "../component/especie"
export const Medicos=()=>{
    const params = useParams();
    const { store, actions } = useContext(Context);
    actions.getMedicos()

    

    return (
        <div className="container color1 espaciob"style={{marginBottom:"50px"}}>

        <div className="row">
        {store.Medicos.map((obj,index)=>{
            
            if(params.especialidad==obj.especialidad){
            return(
                
                <CardMedicos
                nombre={obj.name}
                especialidad={obj.especialidad}
                imagen={obj.imagen}
                />
            )

            }

        })}
        </div>
        </div>
    )
}