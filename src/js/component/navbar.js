import React from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logopequeño.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-success"
      style={{ backgroundColor: "#064439" }}
    >
      <div className="container-fluid">
        <div className="justify-content-start" style={{ marginLeft: "80px" }}>
          <Link to="/">
            <button
              type="button"
              className="btn btn-sm fw-bold"
              style={{ backgroundColor: "#eee7ce" }}
            >
              Inicio
            </button>
          </Link>
          
        </div>
        <div className="justify-content-center">
          <div className="container" style={{ marginLeft: "100px" }}>
            <div className="row">
              <div className="col-3">
                <img
                  src={logo}
                  className="rounded mx-auto d-block rounded-3 border border-2"
                  alt="..."
                  width={30}
                />
              </div>
              <div className="col-9 text-white d-flex align-items-center">
                Bienestar Centro Médico
              </div>
            </div>
          </div>
        </div>
        <div className="justify-content-end" style={{ marginRight: "80px" }}>
          <Link to="/Registro">
            <button
              type="button"
              className="btn btn-sm fw-bold"
              style={{ backgroundColor: "#eee7ce" }}
            >
              Iniciar sesion/Registrate
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
