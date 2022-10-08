import React from "react";
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, green.500, green.800)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Página no encontrada
      </Text>
      <Text color={'gray.500'} mb={6}>
        La página que estás buscando no existe
      </Text>

      <Button
        colorScheme="green"
        bgGradient="linear(to-r, green.600, green.700, green.800)"
        color="white"
        variant="solid">
        Volver al Inicio
      </Button>
    </Box>
  );
}