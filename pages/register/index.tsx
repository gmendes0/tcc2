import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/core";
import Head from "next/head";
import Link from "next/link";
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
          w={["90%", "350px", "350px", "350px"]}
          minH="450px"
          padding="25px"
          bg="white"
        >
          <Heading as="h1">Register</Heading>

          <Box w="100%">
            <Input type="text" placeholder="Full name" />
            <Input type="email" placeholder="Email" my="10px" />
            <Input type="password" placeholder="Password" my="10px" />
            <Input type="password" placeholder="Confirm password" my="10px" />
          </Box>

          <Flex w="100%" direction="column" align="center">
            <Button alignSelf="stretch" variantColor="teal">
              Register
            </Button>

            <Text as="small" mt="5px">
              Already have an account?{" "}
              <Link href="/login">
                <ChakraLink as="a" color="teal.500">
                  Login now
                </ChakraLink>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Register;
