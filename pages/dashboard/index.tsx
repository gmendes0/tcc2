import { Flex } from "@chakra-ui/core";
import Head from "next/head";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <>
      <Head>
        <title>Site - Dashboard</title>
      </Head>
      <Flex w="100vw" h="100vh">
        Dashboard
      </Flex>
    </>
  );
};

export default Dashboard;
