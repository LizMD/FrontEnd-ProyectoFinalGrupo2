import React, { useContext } from "react";
import { Link } from "react-router-dom";
import centromedico from "../../img/centromedico.png"
import { Context } from "../store/appContext"

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar mb-3" style={{ marginBottom: "200", background: "rgb(4, 55, 45)", height: "100px" }}>
			<Link to="/Inicio">
				<button className="btn inicio" style={{ marginLeft: "150px", marginTop: "-10px" }}>Inicio</button>
			</Link>
			<Link to="/Inicio">

				<img src={centromedico} className="img" />

			</Link>
			<div className="ml-auto">
				{store.usuarios.map((obj, index) => {
					if (obj.active == false) {
						return (
							<Link to="/Registro">
								<button className="btn inicio " style={{ marginRight: "130px",width:"150px" }}>Iniciar sesion/Registrate</button>
							</Link>)
					}
					else {
						return (
							<Link to="/Registro">
								<button className="btn inicio " style={{ marginRight: "140px",width:"150px" }} onClick={actions.cerrar(0)}>Cerrar sesion</button>
							</Link>
						)
					}
				})}

			</div>
		</nav>
	);
};
