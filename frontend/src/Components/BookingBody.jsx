import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { useLocation } from "react-router-dom";

export default function BookingBody() {
  const [datevalue, onDateChange] = useState(new Date());
  const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);
  const [avail, onAvail] = useState(true);
  const [first, setFirst] = useState(false);
  const [booked, setBooked] = useState(false);
  const [data, setData] = useState([]);

  const location = useLocation();
  const deets = location.state;
  const hallname = location.state.hall;

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/getData", {
        params: {
          hall: hallname,
        },
      })
      .then(function (res) {
        setData(res.data);
      });
  }, [booked]);

  function sendNewBooking() {
    datevalue.setHours(0, 0, 0, 0);
    axios
      .post(process.env.REACT_APP_SERVER_URL + "/postData", {
        hall: hallname,
        date: datevalue.toLocaleDateString(),
        startTime: timevalue[0],
        endTime: timevalue[1],
      })
      .then(function (response) {
        // onAvail(false)
        setBooked(true);
        console.log("new data inserted");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function checkAvail() {
    onAvail(true);
    datevalue.setHours(0, 0, 0, 0);

    data.forEach((i) => {
      if (i.date === datevalue.toLocaleDateString()) {
        if (
          (timevalue[0] < i.startTime && timevalue[1] <= i.startTime) ||
          (timevalue[0] >= i.endTime && timevalue[1] > i.endTime)
        ) {
        } else {
          onAvail(false);
        }
      }
    });

    setBooked(false);
    setFirst(true);
  }

  return (
    <Box
      ml={{ base: 0, md: 60 }}
      bg={useColorModeValue("gray.100", "gray.900")}
      p="4"
      minH={"85vh"}
    >
      <Box ml="8" mr="10" spacing="15">
        <Box
          px="7"
          pt="3"
          pb="12"
          borderRadius="xl"
          bg={useColorModeValue("white", "gray.500")}
        >
          <Text pt="4" fontSize={"2xl"} fontWeight="semibold">
            Booking details ({hallname})
          </Text>
          <HStack pt="10" spacing={20}>
            {/* <form action="post" method="/sendData"> */}
            <HStack>
              <DatePicker
                name="date"
                minDate={new Date()}
                onChange={(e) => {
                  setFirst(false);
                  onDateChange(e);
                }}
                value={datevalue}
              />
              <TimeRangePicker
                name="time"
                minTime="8:00"
                maxTime="21:00"
                hourPlaceholder="hh"
                minutePlaceholder="mm"
                rangeDivider="to"
                format="h:mm a"
                onChange={(e) => {
                  setFirst(false);
                  onTimeChange(e);
                }}
                value={timevalue}
              />
            </HStack>
            <Link style={{ textDecoration: "none" }}>
              <Button colorScheme="linkedin" onClick={checkAvail}>
                Check Availability
              </Button>
            </Link>
            {/* </form> */}
          </HStack>

          {first &&
            (avail ? (
              booked ? (
                <Box>
                  <Text>{hallname} has been booked! </Text>
                  <Text>Date: {datevalue.toLocaleDateString()}</Text>
                  <Text>
                    Time: {timevalue[0]}-{timevalue[1]}
                  </Text>
                </Box>
              ) : (
                <Box>
                  <Text>It is available</Text>
                  <Button
                    onClick={sendNewBooking}
                    colorScheme="linkedin"
                    mt="10"
                  >
                    Book Hall{" "}
                  </Button>
                </Box>
              )
            ) : (
              <Text>It is not available</Text>
            ))}
        </Box>
        <Box
          mt="10"
          px="7"
          pt="3"
          pb="12"
          borderRadius="xl"
          bg={useColorModeValue("white", "gray.500")}
        >
          <Text mt="5" mb="5" p="2" fontWeight={"semibold"} fontSize="2xl">
            Details
          </Text>
          <HStack>
            <Box mr="10">
              <Image
                rounded={"lg"}
                height={210}
                width={300}
                objectFit={"cover"}
                src={deets.imgsrc}
              />
            </Box>
            <Box>
              <Stack>
                <Heading fontSize={"4xl"} fontFamily={"body"} fontWeight={800}>
                  {deets.hall}
                </Heading>
                <Text
                  pb="2"
                  color={"gray.500"}
                  fontSize={"xm"}
                  textTransform={"uppercase"}
                >
                  ({deets.block})
                </Text>
                <Text>
                  {deets.hall} is located in {deets.block}. It has comfortable
                  seating and a lot of events have been conducted in here! It
                  holds a capacity of {deets.capacity} people.
                </Text>
                <Stack direction={"row"} align={"center"}>
                  <Text mt="6" fontStyle={"italic"} fontSize={"l"}>
                    Max Capacity : {deets.capacity}
                  </Text>
                </Stack>
              </Stack>
            </Box>
            <Box></Box>
          </HStack>
        </Box>
        <Box
          mt="10"
          px="7"
          pt="3"
          pb="12"
          borderRadius="xl"
          bg={useColorModeValue("white", "gray.500")}
        >
          <Text mt="5" mb="5" p="2" fontWeight={"semibold"} fontSize="2xl">
            Booking history
          </Text>
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
                {data.map((i) => {
                  return (
                    <Tr>
                      <Td>{i.hall}</Td>
                      <Td>{i.date}</Td>
                      <Td>{i.startTime}</Td>
                      <Td>{i.endTime}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
