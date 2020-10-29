import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/core";
import Link from "next/link";
import Head from "next/head";

const Login: React.FC = () => {
  return (
    <>
      <Head>
        <title>Site - Login</title>
      </Head>
      <Flex
        direction="column"
        justify="center"
        align="center"
        h="100vh"
        w="100vw"
        bg="gray.50"
      >
        <Flex
          direction="column"
          align="center"
          justify="space-between"
          rounded="lg"
          shadow="lg"
          w={["90%", "350px", "350px", "350px"]}
          minH="350px"
          padding="25px"
          bg="white"
        >
          <Heading as="h1">Login</Heading>

          <Box w="100%">
            <Input my="10px" type="text" placeholder="Your email" />
            <Input my="10px" type="password" placeholder="Your password" />
          </Box>

          <Flex w="100%" direction="column" align="center">
            <Button alignSelf="stretch" variantColor="teal">
              Login
            </Button>
            <Text as="small" mt="5px">
              Don't have an account?{" "}
              <Link href="/register">
                <ChakraLink as="a" color="teal.500">
                  Create now
                </ChakraLink>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
