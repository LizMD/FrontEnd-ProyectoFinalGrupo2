import React from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logopequeño.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Especie = () => {
  return (
    <nav className="navbar justify-content-center"
      style={{ backgroundColor: "#fffcf6" }}>
      
      <Link to="/Medicos/Cosmetología">
            <button
               className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges"
            id="cosme"
            >
              Cosmetología

            </button>
          </Link>
          <Link to="/Medicos/Dermatología">
            <button
               className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges"
            id="derma"
            >
              Dermatología

            </button>
          </Link>
          <Link to="/Medicos/Nutrición">
            <button
              type="button"
              className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges"
            id="nutri"
            >
              Nutrición

            </button>
          </Link>
          <Link to="/Medicos/Psicología">
            <button
              className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges"
            id="psico"
            >
              Psicología

            </button>
          </Link>
          <Link to="/Medicos/Psiquiatría">
            <button
               className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges"
            id="psiq"
            >
              Psiquiatría

            </button>
          </Link>
      
    </nav>
  );
};
