import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

export const Recuperar = () => {
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
            <div className="container ">
              <form>
                <div className="form-group mt-5 ">
                  <Heading
                    bgGradient="linear(to-r, green.500, green.800)"
                    backgroundClip="text"
                  >
                    <label for="exampleInputEmail1">Correo Electronico</label>
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
