import {
  Box,
  Center,
  Spinner,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Text,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecentBookings() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/getHistory")
      .then(function (res) {
        console.log(res.data);
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
        {datas.length === 0 ? (
          <Center>
            <VStack>
              <Spinner
                thickness="3px"
                speed="0.65s"
                size="lg"
                emptyColor="gray.200"
                color="blue.500"
              >
                {" "}
              </Spinner>

              <Text>Data is loading. Please wait...</Text>
            </VStack>
          </Center>
        ) : (
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
        )}
      </Box>
    </Box>
  );
}
