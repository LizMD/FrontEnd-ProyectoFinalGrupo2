import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CardMedicos } from "../component/cardMedicos";
import { CardMedicos1 } from "../component/cardMedicos1";
import { CardMedicos2 } from "../component/cardMedicos2";
import { CardMedicos3 } from "../component/cardMedicos3";
import { CardMedicos4 } from "../component/cardMedicos4";
import { CardMedicos5 } from "../component/cardMedicos5";
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