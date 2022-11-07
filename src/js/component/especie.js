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
            >
              Cosmetología

            </button>
          </Link>
          <Link to="/Medicos/Dermatología">
            <button
               className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges"
            >
              Dermatología

            </button>
          </Link>
          <Link to="/Medicos/Nutrición">
            <button
              type="button"
              className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges"
            >
              Nutrición

            </button>
          </Link>
          <Link to="/Medicos/Psicología">
            <button
              className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges"
            >
              Psicología

            </button>
          </Link>
          <Link to="/Medicos/Psiquiatría">
            <button
               className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton marges"
            >
              Psiquiatría

            </button>
          </Link>
      
    </nav>
  );
};
