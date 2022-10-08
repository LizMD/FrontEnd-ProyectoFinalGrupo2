import React from "react"; 
import { 
  Button, 
  FormControl, 
  Flex, 
  Heading, 
  Input, 
  Stack, 
  Text, 
  useColorModeValue, 
} from "@chakra-ui/react"; 

export default function ForgotPasswordCard() { 
  return ( 
    <Flex 
      minH={"100vh"} 
      align={"center"} 
      justify={"center"} 
      bg={useColorModeValue("gray.50", "gray.800")} 
    > 
      <Stack 
        spacing={4} 
        w={"full"} 
        maxW={"md"} 
        bg={useColorModeValue("white", "gray.700")} 
        rounded={"xl"} 
        boxShadow={"lg"} 
        p={6} 
        my={12} 
      > 
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}> 
        ¿Olvidaste tu Contraseña? 
        </Heading> 
        <Text 
          fontSize={{ base: "sm", sm: "md" }} 
          color={useColorModeValue("gray.800", "gray.400")} 
        > 
          Recibirás un correo con un link para restablecerla. 
        </Text> 
        <FormControl id="email"> 
          <Input 
            placeholder="tu-email@ejemplo.com" 
            _placeholder={{ color: "gray.500" }} 
            type="email" 
          /> 
        </FormControl> 
        <Stack spacing={6}> 
          <Button 
            bg={"green.800"} 
            color={"white"} 
            _hover={{ 
              bg: "green.500", 
            }} 
          > 
          Restablecer Solicitud 
          </Button> 
        </Stack> 
      </Stack> 
    </Flex> 
  ); 
} 
