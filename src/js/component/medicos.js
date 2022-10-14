import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CardMedicos } from "../component/cardmedicos";
import { Context } from "../store/appContext";

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
        </div>
        </div>
    )
}