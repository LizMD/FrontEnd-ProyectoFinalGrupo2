import React from "react";
import { Context } from "../store/appContext"
import { useState ,useContext} from "react";


/* var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/payment", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
 */
// extraer variable de key: init_point que es url de mercado pago que se ejecuta con el boton

/* 
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    fetch(
      "https://3000-zauverer-mercadopagoapi-85u6w9vgz33.ws-us72.gitpod.io/payment"
    )
      .then((response) => response.json())
      .then((result) => setUrl(result.init_point))
      .catch((error) => console.log("error?", error));
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {url ? (
        <button>
          {" "}
          <a href={url}>Pagar</a>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

 */


export const Checkout=()=>{
    
    //const pay = () => alert("vas a pagar")
    
    return(
        
        <div style={{height: "500px"}}>
            <button style={{ backgroundColor: "#eee7ce", marginRight: "15px" }} 
            //onClick={()=>{pay()}}
            onClick={() => window.open( 'https://www.mercadopago.cl/checkout/v1/redirect?pref_id=1219030365-67c15ef1-17e7-448f-b319-bb57644214f8','_self')}
            >Pagaaaar</button>
        </div>
    )
}