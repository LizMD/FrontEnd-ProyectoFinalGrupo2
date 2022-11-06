import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

export const Recuperar2 = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  const [email, setEmail] = useState({ email: "" });
  const bb = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
  
  <div className="row justify-content-center altura">
        <div className="col-6 mt-5">
          <div>
            <div style={{ width: "600px" }} className="container">
              <form>
                <div className="form-group ">
                  <Heading
                    bgGradient="linear(to-r, green.500, green.800)"
                    backgroundClip="text"
                  >
                    <label for="exampleInputEmail1">Correo Electrónico</label>
                  </Heading>

                  <br></br>

                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Coloca Tu Correo"
                    name="email"
                    onChange={bb}
                  />
                  <br></br>
                  <small id="emailHelp" className="form-text text-muted">
                    Nunca compartiremos tu correo electrónico con nadie más.
                  </small>
                  <br></br>
                  <br></br>
                </div>
            
                <Button
                  type="submit"
                  colorScheme="green"
                  bgGradient="linear(to-r, green.600, green.700, green.800)"
                  color="white"
                  variant="solid"
                  onClick={() => actions.recuperar(email.email, history)}
                >
                  Enviar
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};




/* 

import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Recuperar2=()=>{
    const { store, actions } = useContext(Context);
    useEffect (()=>{
        var raw = "";
				var requestOptions = {
					method: 'GET',
					body: raw,
					redirect: 'follow'
				  };
				  
				fetch("https://3000-bairon00-repobackproyec-0cs7sqa6bai.ws-us72.gitpod.io/user/"+localStorage.getItem("Email"))
					.then(response => response.json())
					.then(result => localStorage.setItem("pass",result))
					.catch(error => console.log('error', error));

    },[])
   

    return (
        <div><div style={{ height: "500px" }} className="container">
        <form action={"https://formsubmit.co/" + localStorage.getItem("Email")} method="POST">
            <div class="form-group ">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  />
                <input name="password" value={localStorage.getItem("pass")} type="password" />
                <h6 >te enviaremos tu password a tu correo</h6>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

            </div>

            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>
    </div>

    )
} */