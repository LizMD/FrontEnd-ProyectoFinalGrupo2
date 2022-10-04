import React from "react";
import { Link } from "react-router-dom";


export const CardMedicos = () => {

    return (
        <div className="col-4 ">
            <div className="rounded my-3 col-7  mx-4 efecto1 ">

                <img className="rounded col-4 border-success border" src="https://1.bp.blogspot.com/-6jWWd3JPS2U/WL2R41-rHeI/AAAAAAAABY0/dx9E-cg3c60QCXK8q0MjZJ04-rmKMciuwCEw/s1600/medico-crea-blog.jpg"
                    alt="Tu medico" style={{ width: "15rem" }} />
                <div className="col-12 rounded "style={{background:"rgb(228, 220, 180)"}}>
                    <div className="col-8 " style={{marginLeft:"3px"}}>Nombre:</div>
                    <div className="col-8" style={{marginLeft:"3px"}}>Especialidad:</div>
                </div>
                <Link to={"/medicos" /* + { nombre } */}>
                    <button className=" efecto2 col-12 rounded" style={{ marginTop: "0px", height: "40px", border: "none", width: "15.2rem", color: "white" }}>Reserva tu hora </button>
                </Link>
            </div>
        </div>
    )
}
/* 
cambiar las constantes por props para que el map lo pueda recibir con los parametros de cada medico :D 
aplicar import { useParams } from "react-router-dom"; con el nombre para seleccionar con quien tomar la hora (aqui no en la vista de agendar hora):D
*/