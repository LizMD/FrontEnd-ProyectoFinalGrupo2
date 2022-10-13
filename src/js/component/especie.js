import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Especie = () => (
	<div className="text-center" style={{marginTop: "5px" }}>
       <Link to="/especie">
        <button
            type="button"
            className="btn btn-sm fw-bold"
            style={{ backgroundColor: "#eee7ce" }}
          >
            Especialidades
          </button>
          </Link>
    </div>
);
