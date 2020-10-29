import { ListItem, Link as ChakraLink } from "@chakra-ui/core";
import Link from "next/link";
import React from "react";

interface IProps {
  title: string;
  link: string;
}

const NavbarItem: React.FC<IProps> = ({ title, link }) => {
  return (
    <ListItem marginRight="80px">
      <Link href={link}>
        <ChakraLink>{title}</ChakraLink>
      </Link>
    </ListItem>
  );
};

export default NavbarItem;
