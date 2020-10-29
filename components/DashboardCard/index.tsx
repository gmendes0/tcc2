import { Flex, Text, Link as ChakraLink } from "@chakra-ui/core";
import Link from "next/link";

interface IProps {
  title: string;
  link: string;
}

const DashboardCard: React.FC<IProps> = ({ title, link, children }) => {
  return (
    <Link href={link}>
      <ChakraLink>
        <Flex
          direction="column"
          h="600px"
          w="450px"
          backgroundColor="white"
          borderRadius="12px"
          justify="space-between"
          align="center"
          shadow="xl"
        >
          <Flex justify="center" align="center" w="100%" flexGrow={1}>
            {children}
          </Flex>
          <Text as="h2" fontSize={25} py={10}>
            {title}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
};

export default DashboardCard;
