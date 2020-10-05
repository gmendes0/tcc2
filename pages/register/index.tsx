import { Flex, Heading } from "@chakra-ui/core";
import Head from "next/head";
import React from "react";

const Register: React.FC = () => {
  return (
    <>
      <Head>
        <title>Site - Register</title>
      </Head>
      <Flex
        direction="column"
        h="100vh"
        w="100vw"
        bg="gray.50"
        justify="center"
        align="center"
      >
        <Flex
          direction="column"
          align="center"
          justify="space-between"
          rounded="lg"
          shadow="lg"
          minW="350px"
          minH="350px"
          padding="25px"
          bg="white"
        >
          <Heading as="h1">Register</Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default Register;
