import React from "react";
import logo from "../../img/logopequeño.jpg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-success"
      style={{ backgroundColor: "#064439" }}
    >
      <div className="container-fluid">
        <div className="justify-content-start">
          <button
            type="button"
            className="btn btn-sm fw-bold"
            style={{ backgroundColor: "#eee7ce" }}
          >
            Home
          </button>
        </div>
        <div className="justify-content-center">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <img
                src={logo}
                className="rounded mx-auto d-block"
                alt="..."
                width={80}
              />
            </div>
            <div className="col-9 text-white d-flex align-items-center">Bienetar Centro Medico</div>
          </div>
          </div>
        </div>
        <div className="justify-content-end">
          <div class="btn-group dropstart">
            <button
              type="button"
              className="btn dropdown-toggle fw-bold" style={{ backgroundColor: "#eee7ce" }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              login/registro
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Inicio
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Registrarse
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Recuperar Contraseña
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
