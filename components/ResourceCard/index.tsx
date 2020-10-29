import {
  Flex,
  List,
  ListItem,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/core";
import Link from "next/link";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { customTheme } from "../../styles/theme";

interface IResource {
  id: number;
  name: string;
  email: string;
  status: boolean;
}

interface IProps {
  backgroundImage: string;
  resource: IResource;
}

const ResourceCard: React.FC<IProps> = ({ resource, backgroundImage }) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      w="300px"
      h="300px"
      borderRadius="12px"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={`url(${backgroundImage})`}
      shadow="xl"
    >
      <Flex alignSelf="flex-end" minH="32px" bg="transparent" p="20px">
        <Link href={`#edit-${resource.id}`}>
          <ChakraLink>
            <FiEdit size={20} style={{ marginRight: "10px" }} />
          </ChakraLink>
        </Link>
        <FiTrash2 size={20} style={{ cursor: "pointer" }} />
      </Flex>
      <Flex
        background={`linear-gradient(180deg, rgba(255, 255, 255, 0), ${customTheme.colors.gray[50]}, ${customTheme.colors.gray[50]})`}
        alignSelf="stretch"
        align="flex-end"
        justify="center"
        flexGrow={1}
        borderBottomLeftRadius="12px"
        borderBottomRightRadius="12px"
        py="20px"
      >
        <List>
          <ListItem>
            <Text as="p">
              <Text as="strong">ID:</Text> {resource.id}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p">
              <Text as="strong">Name:</Text> {resource.name}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p">
              <Text as="strong">Email:</Text> {resource.email}
            </Text>
          </ListItem>
          <ListItem>
            <Text as="p">
              <Text as="strong">Status:</Text>{" "}
              {resource.status ? "Ativo" : "Inativo"}
            </Text>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};

export default ResourceCard;
