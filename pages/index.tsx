import { Flex } from "@chakra-ui/core";
import { FiFlag, FiShoppingBag } from "react-icons/fi";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Flex w="100vw" h="auto" minH="100vh" backgroundColor="gray.100">
        <Flex
          w="100vw"
          justify="space-evenly"
          align="center"
          direction="row"
          py="100px"
        >
          <DashboardCard title="Marcas" link="#brands">
            <FiFlag size={85} />
          </DashboardCard>
          <DashboardCard title="Products" link="#products">
            <FiShoppingBag size={85} />
          </DashboardCard>
        </Flex>
      </Flex>
    </>
  );
}
