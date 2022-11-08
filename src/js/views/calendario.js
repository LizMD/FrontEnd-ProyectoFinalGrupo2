import React ,{ useState,useEffect,useContext} from "react";
import { InlineWidget } from "react-calendly";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";



export const Calendario=()=>{
  const { store, actions } = useContext(Context);
  const params = useParams("");
  const [medico, setMedico] = useState({})
  const history = useHistory();
  useEffect(()=>{
    /* actions.Pago() */
    console.log(store)
    store.Medicos.map((obj,index)=>{
      if(obj.name==params.name){
      setMedico(obj)
      }
      
    })
    actions.Pago(medico.name,medico.valor,medico.especialidad)
    console.log(store.Pago.sandbox_init_point)
  })
    return (
      <div>
        <InlineWidget url="https://calendly.com/lorehuincahue/30min"
        className= "altura"
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '064439',
          textColor: '4d5055',
          height: '200px',
          Width: '200px'
        }}     
        />
        
        <button onClick={()=>window.location.replace(store.Pago.init_point)}>{"pagar"+medico.valor}</button>
        
      </div>
    );
  
      }