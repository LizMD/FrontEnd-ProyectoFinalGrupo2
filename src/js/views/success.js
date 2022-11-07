import React from "react";
import "../../styles/home.css";
import pago from "../../img/pago.jpg";


import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";



export const Success=()=>{
    
    //const pay = () => alert("vas a pagar")
    
    return(
        
        <div className="altura">
           
            <Box textAlign="center" py={10} px={6}>
      <Heading
      
        display="inline-block"
        bgGradient="linear(to-r, green.500, green.800)"
        backgroundClip="text">
        <img src={pago} className="card-img-top" alt="..."></img>
      </Heading>
      <br></br>
      <br></br>
      <Link to="/">
      <Button
      textAlign="center"
        colorScheme="green"
        bgGradient="linear(to-r, green.600, green.700, green.800)"
        color="white"
        variant="solid">
        Volver al Inicio
      </Button>
      </Link>
    </Box>
      
            
         
  

        </div>
    )
}