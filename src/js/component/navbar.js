import React from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logopequeño.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-success"
      style={{ backgroundColor: "#064439" }}
    >
      <div className="container-fluid">
        <div className="justify-content-start" style={{ marginLeft: "80px" }}>
          <Link to="/home">
            <button
              type="button"
              className="btn btn-sm fw-bold"
              style={{ backgroundColor: "#eee7ce", marginRight: "15px" }}
            >
              Inicio
            </button>
          </Link>
        </div>
        <div className="justify-content-center">
          <div className="container" style={{ marginLeft: "50px" }}>
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
          <div className="rounded-3 border border-2 dropdown">
            <a
              className="btn btn-sm fw-bold rounded-3 border border-2"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Inicia sesión/Registrarse
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link to="/inisesion">
                <li>
                  <a className="dropdown-item fw-bold">Inicia sesión</a>
                </li>
              </Link>
              <Link to="/registrarse">
                <li>
                  <a className="dropdown-item fw-bold" href="#">
                    Registrarse
                  </a>
                </li>
              </Link>
              <Link to="/recupera">
                <li>
                  <a className="dropdown-item fw-bold" href="#">
                    Recuperar contraseña
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
