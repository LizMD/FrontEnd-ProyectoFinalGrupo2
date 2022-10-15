import React from "react";
import carru1 from "../../img/centromedico.jpg"
import carru2 from "../../img/carru2.jpg"
import carru3 from "../../img/carru3.jpg"
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	
  <div className="text-center mt-5">
    
		<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carru1} className="d-block w-90" alt="..." />
    </div>
    <div className="carousel-item">
    <img src={carru2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <img src={carru3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
	</div>
);
