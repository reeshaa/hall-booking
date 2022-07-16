import { Box, Text, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
// import HallCard from "./HallCard";

export default function Contacts() {
  return (
    <Box
      ml={{ base: 0, md: 60 }}
      bg={useColorModeValue("gray.100", "gray.900")}
      p="4"
      minH={"85vh"}
    >
      <Box
        px="7"
        pt="3"
        pb="12"
        borderRadius="xl"
        bg={useColorModeValue("white", "gray.500")}
      >
        <Text>Hello contacts</Text>
      </Box>
    </Box>
  );
}
