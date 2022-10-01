import React from "react";
import logo from "../../img/logopequeño.jpg"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-success bg-success">
  <div className="container-fluid">
  <img src={logo} className="img-thumbnail" alt="..." width={"40"} style="margin"/>
  
    <a className="navbar-brand" href="#">Centro Médico Bienestar</a>
	
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Médicos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Horarios</a>
        </li>
      </ul>
    </div>
	<ul className="navbar-nav">
	
	</ul>
	<div class="btn-group dropstart">
  <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  Iniciar sesión
  </button>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Inicio</a></li>
            <li><a className="dropdown-item" href="#">Registrarse</a></li>
            <li><a className="dropdown-item" href="#">Recuperar Contraseña</a></li>
          </ul>
</div>
  </div>
</nav>
  );
};
