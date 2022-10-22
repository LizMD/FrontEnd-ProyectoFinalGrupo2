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
                    <Input type="text" onChange={actions.handleChange} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Apellido</FormLabel>
                    <Input type="text" onChange={actions.handleChange} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Correo Electrónico</FormLabel>
                <Input type="email" onChange={actions.handleChange} />
              </FormControl>
              <FormControl id="Previsión" isRequired>
                <FormLabel>Previsión</FormLabel>
                <Input type="prevision" onChange={actions.handleChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Contraseña</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={actions.handleChange}
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

           // let formData = new FormData();
        formData.append("name", store.name);
        formData.append("last_name", store.last_name);
        formData.append("email", store.email);
        formData.append("prevision", store.prevision);
        formData.append("password", store.password); //
