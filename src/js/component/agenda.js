import React, { Component } from "react";
import goo from "../../img/google.jpg";
import logop from "../../img/logop.jpg";
import Inst from "../../img/inst.jpg";
import Fac from "../../img/fac.jpg";
import Twi from "../../img/twi.jpg";
import Tele from "../../img/tele.jpg";

export const Agenda = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-4" style={{ backgroundColor: "#064439" }}>
        <div className="clearfix">
          <div className="text-center text-white" style={{ marginTop: "5px" }}>
            <h6>Agendamientos</h6>
          </div>

          <img
            src={goo}
            className="col-md-3 float-md-start mb-3 ms-md-3 mx-3 rounded-3 border border-2"
            alt="..."
            width={20}
          />
          <div className=" margin-left-1 text-white">
            <p className="fs-6">
              Santiago Av. Manquehue Sur 350. Las Condes R.M.
            </p>
            <p>P: +56 (9) 7284 8039 chile@4GeeksAcademy.com</p>
          </div>
        </div>
      </div>
      <div className="col-4" style={{ backgroundColor: "#064439" }}>
        <br></br>
        <img
          src={logop}
          className="rounded mx-auto d-block rounded-3 border border-2"
          alt="..."
          width={130}
        />
      </div>
      <div className="col" style={{ backgroundColor: "#eee7ce" }}>
        <div className="text-center" style={{ marginTop: "5px" }}>
          <h1>Redes Sociales</h1>
        </div>
        <br></br>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-2 justify-content-end">
              <img
                src={Fac}
                className="rounded mx-auto d-block"
                alt="..."
                width={20}
              />
            </div>
            <div className="col-4 justify-content-start">
              <h5>Facebook</h5>
            </div>
            <div className="col-2">
              <img
                src={Inst}
                className="rounded mx-auto d-block"
                alt="..."
                width={20}
              />
            </div>
            <div className="col-4">
              <h5>Instagram</h5>
            </div>
          </div>
        </div>
        <br></br>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-2 justify-content-end">
              <img
                src={Twi}
                className="rounded mx-auto d-block"
                alt="..."
                width={20}
              />
            </div>
            <div className="col-4 justify-content-start">
              <h5>Twiter</h5>
            </div>
            <div className="col-2">
              <img
                src={Tele}
                className="rounded mx-auto d-block"
                alt="..."
                width={20}
              />
            </div>
            <div className="col-4">
              <h5>Telegram</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
