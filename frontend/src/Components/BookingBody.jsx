import { Box, Text, HStack, Button, Link, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { data } from "../dummydates";
import { useLocation } from "react-router-dom";

export default function BookingBody(props) {
  const [datevalue, onDateChange] = useState(new Date());
  const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);
  const [avail, onAvail] = useState(true);
  const [first, setFirst] = useState(false);

  const location = useLocation();
  const hallname = location.state;
  console.log(hallname);

  function checkAvail() {
    onAvail(true);
    datevalue.setHours(0, 0, 0, 0);

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
    setFirst(true);
  }

  return (
    <Box pl="10" pr="10" spacing="15">
      <Box>
        <Text pt="4" fontSize={"2xl"} fontWeight="semibold">
          Booking details ({hallname})
        </Text>
        <HStack pt="10" spacing={20}>
          {/* <form action="post" method="/sendData"> */}
          <HStack>
            <DatePicker name="date" onChange={onDateChange} value={datevalue} />
            <TimeRangePicker
              name="time"
              onChange={onTimeChange}
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

        {avail && first && <Text>It is available</Text>}
        {!avail && <Text>It is not available</Text>}
        {avail && first && (
          <Button colorScheme="linkedin" mt="20">
            Book Hall{" "}
          </Button>
        )}
      </Box>
    </Box>
  );
}
