import React from "react";
import "../../styles/home.css";



import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";



export const Rechazado=()=>{
    
    //const pay = () => alert("vas a pagar")
    
    return(
        
        <div className="altura">
            <Box textAlign="center" py={10} px={10}>
      <br></br>
      <br></br>
      <Heading
      className="altoletra"
        display="inline-block"
        as="h2"
        bgGradient="linear(to-r, green.500, green.800)"
        backgroundClip="text">
        Su pago fue rechazado!!
      </Heading>
        <br></br>
        <br></br>
      <Link to="/">
      <Button
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