import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignupCard(props) {
  const { store, actions } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Regístrate
          </Heading>
        </Stack>
        <form onSubmit={(e) => actions.registrarse(e, props.history)}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input type="text" onChange={actions.handleChange} name={"name"} value={store.name} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Apellido</FormLabel>
                    <Input type="text" onChange={actions.handleChange} name={"last_name"} value={store.last_name} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Correo Electrónico</FormLabel>
                <Input type="email" onChange={actions.handleChange} name={"email"} value={store.email} />
              </FormControl>
              <FormControl id="Previsión" isRequired>
                <FormLabel>Previsión</FormLabel>
                <Input type="prevision" onChange={actions.handleChange} name={"prevision"} value={store.prevision} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Contraseña</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={actions.handleChange} name={"password"} value={store.password}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? (
                        <Text fontSize="md">
                          <AiFillEye />
                        </Text>
                      ) : (
                        <Text fontSize="md">
                          <AiFillEyeInvisible />
                        </Text>
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  type="submit"
                  size="lg"
                  bg={"green.800"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Registrarse
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  ¿Ya estás registrado?{" "}
                  <Link href="/logincard" color={"green.700"}>
                    Inicia Sesión
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}