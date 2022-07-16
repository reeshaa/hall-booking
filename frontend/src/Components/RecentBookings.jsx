import { Box, Text, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
// import HallCard from "./HallCard";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function RecentBookings() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get("/getHistory").then(function (res) {
      setDatas(res.data);
    });
  }, []);

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
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Hall</Th>
                <Th>Date</Th>
                <Th>Start time</Th>
                <Th>End time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {datas.map((data) => {
                return (
                  <Tr>
                    <Td>{data.hall}</Td>
                    <Td>{data.date}</Td>
                    <Td>{data.startTime}</Td>
                    <Td>{data.endTime}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
