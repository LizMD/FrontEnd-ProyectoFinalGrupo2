import { propNames } from "@chakra-ui/react";
import React,{ useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardMedicos = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="col-4 ">
            <div className="rounded my-3 col-7  mx-4 efecto1 ">

                <img className="rounded col-4 border-success border" src="https://1.bp.blogspot.com/-6jWWd3JPS2U/WL2R41-rHeI/AAAAAAAABY0/dx9E-cg3c60QCXK8q0MjZJ04-rmKMciuwCEw/s1600/medico-crea-blog.jpg"/* {props.imagen} */
                    alt="Tu medico" style={{ width: "15rem" }} />
                <div className="col-12 rounded  "style={{background:"rgb(228, 220, 180)", marginBottom:"-8px"}}>
                    <h5 style={{marginBottom:"0px",marginLeft:"4px"}}>{props.nombre}</h5>
                    <h6 style={{marginBottom:"8px",marginLeft:"4px"}}>{props.especialidad}</h6>
          
                </div>
                <Link to={"/calendario/"+props.nombre }>
                    <button className=" efecto2 col-12 rounded" style={{ marginTop: "0px", height: "30px", border: "none", width: "100%", color: "white" }} onClick={()=>actions.Pago()}>Reserva tu hora </button>
                </Link>
            </div>
        </div>
    )
}