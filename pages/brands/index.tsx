import { Flex, Heading, SimpleGrid } from "@chakra-ui/core";
import React from "react";
import { FiFlag, FiShoppingBag } from "react-icons/fi";
import ResourceCard from "../../components/ResourceCard";
import Navbar from "../../components/Navbar";
import Head from "next/head";

const Brands: React.FC = () => {
  return (
    <>
      <Head>
        <title>Brands</title>
      </Head>
      <Navbar />
      <Flex
        direction="column"
        align="center"
        w="100vw"
        h="auto"
        minH="100vh"
        backgroundColor="gray.100"
        padding={30}
      >
        <Heading as="h1" padding="30px">
          Brands
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
          spacing={10}
          w="100vw"
          maxW="1200px"
          justifyItems="center"
        >
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
          <ResourceCard
            backgroundImage="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            resource={{
              id: 1,
              name: "Corsair",
              email: "support@corsair.com",
              status: true,
            }}
          />
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Brands;
