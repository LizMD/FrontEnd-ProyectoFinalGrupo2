import React ,{ useState,useEffect,useContext} from "react";
import { InlineWidget } from "react-calendly";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Medicos } from "./medicos";


export const Calendario=()=>{
  const { store, actions } = useContext(Context);
  const params = useParams("");
  const [medico, setMedico] = useState({})
  useEffect(()=>{
    store.Medicos.map((obj,index)=>{
      if(obj.name==params.name){
      setMedico(obj)
      }
    })
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
        <button>{"pagar"+medico.valor}</button>
      </div>
    );
  
      }