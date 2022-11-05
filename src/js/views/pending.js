import React from "react";
import "../../styles/home.css";



import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";



export const Pending=()=>{
    
    //const pay = () => alert("vas a pagar")
    
    return(
        
        <div style={{height: "500px"}}>
            <br></br>
            <br></br>
            <br></br>
            <Box textAlign="center" py={10} px={6}>
      <br></br>
      <br></br>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, green.500, green.800)"
        backgroundClip="text">
        Su pago se encueentra pendiente, favor intentelo de nuevo!!
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