import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Context } from "../store/appContext"
import { useState ,useContext} from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function LoginCard() {
  const { store, actions } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  })
  const aa = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Inicia Sesión</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} >
            <FormControl id="email" >
              <FormLabel >Dirección de Email</FormLabel>
              <Input type="email" name="email" onChange={aa} />
            </FormControl>
            <FormControl id="password" name="password">
              <FormLabel>Contraseña</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} onChange={aa} name="password" />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <Text fontSize='md'><AiFillEye /></Text> : <Text fontSize='md'><AiFillEyeInvisible /></Text>}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Recuérdame</Checkbox>
                <Link href="/forgotpasswordcard" color={'green.700'}>¿Olvidaste tu Contraseña?</Link>
              </Stack>
              <Button  onClick={() => {
                actions.verificacion(usuario.email,usuario.password);
                
                
              }}
                bg={'green.800'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}>
                Inicia Sesión
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}