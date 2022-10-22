import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext"
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Link,
  } from '@chakra-ui/react';
  import { AiFillCloseCircle } from "react-icons/ai";
  
  export default function PerfilUsuario() {
    const { store, actions } = useContext(Context);
    const  history = useHistory();
    useEffect(()=>{
      
      if(localStorage.getItem("Token")){
        actions.usuario()
        }
    else{
        history.push("/logincard")
    }
      
    },[])
    
    return (
      
      
        
        
            <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Información del Usuario
          </Heading>
          <FormControl id="Nombre">
            <FormLabel>Nombre:{store.Usuario.user?.name}</FormLabel>
          </FormControl>
          <FormControl id="Apellido">
            <FormLabel>Apellido:{store.Usuario.user?.last_name}</FormLabel>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Correo Electrónico:{store.Usuario.user?.email}</FormLabel>
          </FormControl>
          <FormControl id="Previsión">
            <FormLabel>Previsión:{store.Usuario.user?.prevision}</FormLabel>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Contraseña:</FormLabel>
          </FormControl>
          <Stack spacing={6}> 
          <Stack spacing={6}> 
          <Link href="/userprofileedit"><Button 
            bg={"green.800"} 
            color={"white"} 
            _hover={{ 
              bg: "green.500", 
            }} 
          > 
          Editar Usuario 
          </Button></Link> 
        </Stack> 
        </Stack> 
        </Stack>
      </Flex>
          )
        
      
     
    
  }