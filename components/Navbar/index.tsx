import { Box, Flex, List, ListItem, Text } from "@chakra-ui/core";
import React from "react";
import NavbarItem from "../NavbarItem";

const Navbar: React.FC = () => {
  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      w="100vw"
      height="70px"
      backgroundColor="white"
      boxShadow="sm"
    >
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        w="100%"
        h="100%"
        maxW="1200px"
      >
        <List d="flex" flexDirection="row" justifyContent="space-between">
          <NavbarItem title="Home" link="/" />
        </List>
        <Flex>
          <Text>Gabriel Mendes</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
