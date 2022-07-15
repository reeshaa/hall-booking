import {
  Box,
  Text,
  Grid,
  GridItem,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { data } from "../dummydates";

export default function BookingBody() {
  const [datevalue, onDateChange] = useState(new Date());
  const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);
  const [avail, onAvail] = useState(true);

  function checkAvail() {
    onAvail(true);
    datevalue.setHours(0, 0, 0, 0);

    console.log(timevalue[0] + " my start");
    console.log(timevalue[1] + " my end");

    data.forEach((i) => {
      if (i.date.getTime() === datevalue.getTime()) {
        // todo : timelogic

        console.log(i.startTime + " istart");
        console.log(i.endTime + " iend");

        if (
          (timevalue[0] < i.startTime && timevalue[1] <= i.startTime) ||
          (timevalue[0] >= i.endTime && timevalue[1] > i.endTime)
        ) {
          console.log("avail");
        } else {
          console.log("not avail");
          onAvail(false);
        }
      }
    });

    console.log(avail);
    return avail;
  }

  return (
    <Box pl="10" pr="10" spacing="15">
      <Box>
        <Text pt="4" fontSize={"2xl"} fontWeight="semibold">
          Booking details
        </Text>
        <HStack pt="10" spacing={20}>
          <HStack>
            <DatePicker onChange={onDateChange} value={datevalue} />
            <TimeRangePicker onChange={onTimeChange} value={timevalue} />
          </HStack>
          <Link style={{ textDecoration: "none" }}>
            <Button colorScheme="linkedin" onClick={checkAvail}>
              Check Availability
            </Button>
          </Link>
          {/* <Text>Available</Text>
          else<Text>Not Available</Text> */}
        </HStack>
      </Box>
      {/* <Text pt="4" fontSize={"2xl"} fontWeight="semibold">
        Hall Details
      </Text> */}
    </Box>
  );
}
