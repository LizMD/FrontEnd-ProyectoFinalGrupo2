import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CardMedicos } from "../component/cardmedicos";
import { CardMedicos1 } from "../component/cardmedicos1";
import { CardMedicos2 } from "../component/cardmedicos2";
import { CardMedicos3 } from "../component/cardmedicos3";
import { CardMedicos4 } from "../component/cardmedicos4";
import { CardMedicos5 } from "../component/cardmedicos5";
import { Context } from "../store/appContext";

export const Medicos=()=>{

    return (
        <div className="container color1">
        <div className="row">
        <CardMedicos/>
        <CardMedicos1/>
        <CardMedicos2/>
        <CardMedicos3/>
        <CardMedicos4/>
        <CardMedicos5/>
        </div>
        </div>
    )
}