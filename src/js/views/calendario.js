import React, { useState, useEffect, useContext } from "react";
import { InlineWidget } from "react-calendly";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Calendario = () => {
  const { store, actions } = useContext(Context);
  const params = useParams("");
  const [medico, setMedico] = useState({});
  const history = useHistory();
  useEffect(() => {
    /* actions.Pago() */
    console.log(store);
    store.Medicos.map((obj, index) => {
      if (obj.name == params.name) {
        setMedico(obj);
      }
    });
    actions.Pago(medico.name, medico.valor, medico.especialidad);
    console.log(store.Pago.sandbox_init_point);
  });
  return (
    
    <div className="">
    
      <div class="container">
     
        <div class="row g-2">
          <div class="col-11">
            <div class="p-3">
            <div class="alert alert-info alert-dismissible fade show text-center" role="alert">
  <strong>RECUERDA!</strong> que puedes pagar online tu hora médica o pagar el día de tu cita.
</div>
              <InlineWidget
                url="https://calendly.com/lorehuincahue/30min"
                className="altura"
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "064439",
                  textColor: "4d5055",
                  height: "200px",
                  Width: "200px",
                }}
              />
            </div>
          </div>
          
          <div className="col-1 center3" >
            <div className="p-3">
              {" "}
              <button
                type="button"
                className=" efecto2 col-12 rounded" style={{ marginTop: "0px", height: "80px", border: "none", width: "80px", color: "white" }}
                onClick={() => window.location.replace(store.Pago.init_point)}>
                {"PAGAR $"+ medico.valor}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
