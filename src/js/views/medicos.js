import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CardMedicos } from "../component/cardMedicos";
import { Context } from "../store/appContext";
import { CardMedicos2 } from "../component/cardMedicos2";

export const Medicos=()=>{

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