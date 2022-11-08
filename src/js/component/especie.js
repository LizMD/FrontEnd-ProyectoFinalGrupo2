import React, { useState } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logopequeño.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Especie = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    
    <nav className="navbar justify-content-center"
      style={{ backgroundColor: "#e2dfce" }}>
      
      <Link to="/Medicos/Cosmetología">
            <button
            onClick={()=>setSelectedColor("rosado")}
               className={"btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges "+ (selectedColor === "rosado" ? " rosado" : "")}
            >
              Cosmetología

            </button>
          </Link>
          <Link to="/Medicos/Dermatología">
            <button
            onClick={()=>setSelectedColor("azul")}
               className={"btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges "+ (selectedColor === "azul" ? "azul" : "")}
            >
              Dermatología

            </button>
          </Link>
          <Link to="/Medicos/Nutrición">
            <button
            onClick={()=>setSelectedColor("morado")}
             
              className={"btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges "+ (selectedColor === "morado" ? "morado" : "")}
            >
              Nutrición

            </button>
          </Link>
          <Link to="/Medicos/Psicología">
            <button
            onClick={()=>setSelectedColor("verde")}
              className={"btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges "+ (selectedColor === "verde" ? "verde" : "")}
            >
              Psicología

            </button>
          </Link>
          <Link to="/Medicos/Psiquiatría">
            <button
            onClick={()=>setSelectedColor("blanco")}
               className={"btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges "+ (selectedColor === "blanco" ? "blanco" : "")}
            >
              Psiquiatría

            </button>
          </Link>
      
    </nav>
  );
};
