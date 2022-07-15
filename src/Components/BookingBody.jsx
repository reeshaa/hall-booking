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

export default function BookingBody() {
  const [datevalue, onDateChange] = useState(new Date());
  const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);

  // const today = new Date();

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
          <Link href="/hallbooking" style={{ textDecoration: "none" }}>
            <Button colorScheme="linkedin">Check Availability</Button>
          </Link>
        </HStack>
      </Box>
      <Text pt="4" fontSize={"2xl"} fontWeight="semibold">
        Hall Details
      </Text>
    </Box>
  );
}
