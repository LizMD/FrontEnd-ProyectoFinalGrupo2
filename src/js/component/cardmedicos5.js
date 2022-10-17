import React from "react";
import { Link } from "react-router-dom";


export const CardMedicos5 = () => {

    return (
        <div className="col-4 ">
            <div className="rounded my-3 col-7  mx-4 efecto1 ">

                <img className="rounded col-4 border-success border" src="https://1.bp.blogspot.com/-6jWWd3JPS2U/WL2R41-rHeI/AAAAAAAABY0/dx9E-cg3c60QCXK8q0MjZJ04-rmKMciuwCEw/s1600/medico-crea-blog.jpg"
                    alt="Tu medico" style={{ width: "15rem" }} />
                <div className="col-12 rounded  "style={{background:"rgb(228, 220, 180)", marginBottom:"-8px"}}>
                    <h5 style={{marginBottom:"0px",marginLeft:"4px"}}>Dra.Alessandro Castellanos</h5>
                    <h6 style={{marginBottom:"8px",marginLeft:"4px"}}>Psicología</h6>
          
                </div>
                <Link to={"/medicos" /* + { nombre } */}>
                    <button className=" efecto2 col-12 rounded" style={{ marginTop: "0px", height: "30px", border: "none", width: "100%", color: "white" }}>Reserva tu hora </button>
                </Link>
            </div>
        </div>
    )
}