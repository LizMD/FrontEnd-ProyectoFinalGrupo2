import React, { Component } from "react";
import goo from "../../img/google.jpg";
import logop from "../../img/logop.jpg";

export const Agenda = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-4" style={{ backgroundColor: "#064439" }}>
        <div className="clearfix">
          <br></br>
          <div className="text-center text-white">
            <h1>Agendamientos</h1>
            <br></br>
          </div>
          <img
            src={goo}
            className="col-md-3 float-md-start mb-3 ms-md-3 mx-3"
            alt="..."
            width={50}
          />
          <div className=" margin-left-1 text-white">
            <p>Santiago Av. Manquehue Sur 350. Las Condes R.M.</p>
            <p>P: +56 (9) 7284 8039 chile@4GeeksAcademy.com</p>
          </div>
        </div>
      </div>
      <div className="col-4" style={{ backgroundColor: "#064439" }}>
        <br></br>
        <img
          src={logop}
          className="rounded mx-auto d-block"
          alt="..."
          width={250}
        />
      </div>
      <div className="col-4" style={{ backgroundColor: "#eee7ce" }}>
        <br></br>
        <div className="text-center">
          <h1>Redes Sociales</h1>
          <br></br>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-3">
              <img
                src={logop}
                className="rounded mx-auto d-block"
                alt="..."
                width={30}
              />
            </div>
            <div class="col-9">Instagram</div>
          </div>
          <div class="row">
            <div class="col-3">
              <img
                src={logop}
                className="rounded mx-auto d-block"
                alt="..."
                width={30}
              />
            </div>
            <div class="col-9">Facebook</div>
          </div>
          <div class="row">
            <div class="col-3">
              <img
                src={logop}
                className="rounded mx-auto d-block"
                alt="..."
                width={30}
              />
            </div>
            <div class="col-9">twiter</div>
          </div>
          <div class="row">
            <div class="col-3">
              <img
                src={logop}
                className="rounded mx-auto d-block"
                alt="..."
                width={30}
              />
            </div>
            <div class="col-9">Telegram</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
