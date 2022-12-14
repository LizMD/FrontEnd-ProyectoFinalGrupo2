import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logopequeño.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  console.log(store.Usuario.user?.is_active);
  /* const aa = ()=>{
    store.Usuario.user?.is_active==false
    localStorage.removeItem("Token")
    history.push("/")

  } */
  return (
    <nav className="navbar navbar-expand-lg navbar-success fonnav">
      <div className="container-fluid">
        <div className="justify-content-start" style={{ marginLeft: "80px" }}>
          <Link to="/">
            <button
              type="button"
              className="btn-sm card-link fw-bold redes text-letra rounded-sm"
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
              <div className="col-9 text-white d-flex align-items-center fw-bold">
                BIENESTAR CENTRO MÉDICO
              </div>
            </div>
          </div>
        </div>
        <div>
        
        {localStorage.getItem("Token") ? (
          <>
          <button
            type="button"
            className="btn-sm card-link fw-bold redes text-letra rounded-sm"
            style={{ backgroundColor: "#eee7ce", marginRight: "15px" }}
            onClick={() => actions.aa(history)}
          >
            Cerrar sesion
          </button>
          <Link to="/perfilusuario">
          <button
             type="button"
             className="btn-sm card-link fw-bold redes text-letra rounded-sm"
             style={{ backgroundColor: "#eee7ce", marginRight: "15px" }}
           >
             Perfil
           </button>
         </Link> 
         </>
        ) : (
          <div className="justify-content-end" style={{ marginRight: "80px" }}>
            <div className="rounded-3 border border-2 dropdown">
              <a
                className="btn-sm card-link fw-bold redes text-letra rounded-sm"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inicia Sesión/Registrarse
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link to="/logincard">
                  <li>
                    <a className="dropdown-item fw-bold">Inicia Sesión</a>
                  </li>
                </Link>
                <Link to="/signupcard">
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Registrarse
                    </a>
                  </li>
                </Link>
                <Link to="/recuperar">
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Recuperar contraseña
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
      </div>
    </nav>
  );
};
