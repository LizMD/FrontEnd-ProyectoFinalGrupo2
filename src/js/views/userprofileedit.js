import React from "react";
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
  
  export default function UserProfileEdit() {
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
            Editar Perfil de Usuario
          </Heading>
          <FormControl id="Nombre" isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input
              placeholder="carla"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="Nombre" isRequired>
            <FormLabel>Apellido</FormLabel>
            <Input
              placeholder="soto"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input
              placeholder="tu-email@ejemplo.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <FormControl id="Previsión" isRequired>
            <FormLabel>Previsión</FormLabel>
            <Input
              placeholder="fonasa"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <Input
              placeholder="contraseña"
              _placeholder={{ color: 'gray.500' }}
              type="password"
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
          <Link href="/perfilusuario"><Button
              bg={'green.800'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'green.500',
              }}>
              Cancelar
            </Button></Link>
            <Button
              bg={'green.800'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'green.500',
              }}>
              Guardar Cambios
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }