import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import goo from "../../img/google.jpg";
import logop from "../../img/logop.jpg";
import Inst from "../../img/inst.jpg";
import Fac from "../../img/fac.jpg";
import Twi from "../../img/twi.jpg";
import Tele from "../../img/tele.jpg";
import "../../styles/home.css";

export const Agenda = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-4" style={{ backgroundColor: "#064439" }}>
        <div className="clearfix">
          <div className="text-center text-white fw-bold fs-6" style={{ marginTop: "5px" }}>
          <p>Dirección</p>
          </div>

          <img
            src={goo}
            className="col-md-3 float-md-start mb-3 ms-md-3 mx-3 rounded-2 border border-1"
            alt="..."
            width={3}
          />
          <br></br>
          <div className=" margin-left-7 text-white fs-7">
            <p className="fs-7">Santiago Av. Manquehue Sur 350.</p>
              <p className="fs-7">Las Condes R.M.</p>
            <p className="fs-7">P: +56 (9) 7284 8039</p>
            <p className="fs-7">chile@4GeeksAcademy.com</p>
          </div>
        </div>
      </div>
      <div className="col-4" style={{ backgroundColor: "#064439" }}>
        <br></br>
        <img
          src={logop}
          className="rounded mx-auto d-block"
          alt="..."
          width={150}
        />
      </div>
      <div className="col" style={{ backgroundColor: "#eee7ce" }}>
        <div className="text-center fw-bold" style={{ marginTop: "5px" }}>
          <h1>Redes Sociales</h1>
        </div>
        <br></br>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-2 justify-content-end" >
              
              <img
                src={Fac}
                className="rounded mx-auto d-block"
                alt="..."
                width={30}
                
              />
            </div>

            <div className="col-4 justify-content-start">
              <a  href="https://www.facebook.com/BienestarCentroMedico" target="_blank">
              <button 
            
              rel="noopener noreferrer"
                type="button" 
                className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton"
                   
                >Facebook
              </button>

              </a>
              
       
            </div>
            <div className="col-2 justify-content-end p-b-20">
              <img
                src={Inst}
                className="rounded mx-auto d-block"
                alt="..."
                width={30}
              />
            </div>
            <div className="col-4">
              <a href="https://www.instagram.com/BienestarCentroMedico" target="_blank">
                <button 
                  
                  rel="noopener noreferrer"
                    
                    type="button" 
                    className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton"
                    >Instagram
                  </button>
              </a>
            
            </div>
          </div>
          <br></br>
          
          <div className="row align-items-start">
            <div className="col-2 justify-content-end" >
              
              <img
                src={Twi}
                className="rounded mx-auto d-block"
                alt="..."
                width={30}
                
              />
            </div>
            <div className="col-4 justify-content-start">
            <a  href="https://www.twiter.com/BienestarCentroMedico" target="_blank">
              <button 
                
                rel="noopener noreferrer"
                type="button" 
                className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton"
                >Twitter
              </button>
            </a>
       
            </div>
            <div className="col-2 justify-content-end">
              <img
                src={Tele}
                className="rounded mx-auto d-block"
                alt="..."
                width={30}
              />
            </div>
            <div className="col-4">

            <a href="https://www.telegram.com/BienestarCentroMedico" target="_blank">
            <button 
          
                rel="noopener noreferrer"
                type="button" 
                className="btn-sm card-link fw-bold redes text-letra rounded-sm colorbutton"
                >Telegram
              </button>

            </a>
            
            </div>
          </div>









    
        </div>
        <br></br>
        
      </div>
    </div>
  </div>
);
