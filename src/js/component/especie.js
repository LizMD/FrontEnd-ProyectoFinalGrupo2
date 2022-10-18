import React from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logopequeño.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Especie = () => {
  return (
    <nav className="navbar justify-content-center"
      style={{ backgroundColor: "#fffcf6" }}>
      
      <Link to="/">
            <button
              type="button"
              className="btn btn-sm fw-bold"
              style={{ backgroundColor: "#eee7ce", marginRight: "15px" }}
            >
              Cosmetología

            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="btn btn-sm fw-bold"
              style={{ backgroundColor: "#eee7ce", marginRight: "15px" }}
            >
              Dermatología

            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="btn btn-sm fw-bold"
              style={{ backgroundColor: "#eee7ce", marginRight: "15px" }}
            >
              Nutrición

            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="btn btn-sm fw-bold"
              style={{ backgroundColor: "#eee7ce", marginRight: "15px" }}
            >
              Psicología

            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="btn btn-sm fw-bold"
              style={{ backgroundColor: "#eee7ce", marginRight: "15px" }}
            >
              Psiquiatría

            </button>
          </Link>
      
    </nav>
  );
};
