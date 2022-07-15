import { Box, Button, HStack, Link, Text } from "@chakra-ui/react";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-date-picker";
import { useLocation } from "react-router-dom";

export default function BookingBody(props) {
  const [datevalue, onDateChange] = useState(new Date());
  const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);
  const [avail, onAvail] = useState(true);
  const [first, setFirst] = useState(false);
  const [booked, setBooked] = useState(false);
  const [data, setData] = useState([]);

  const location = useLocation();
  const hallname = location.state;
  // console.log(hallname);

  useEffect(() => {
    axios
      .get("/hallbooking", {
        params: {
          hall: hallname,
        },
      })
      .then(function (res) {
        setData(res.data);
        // console.log("data : "+res.data);
      });
  }, [booked]);

  function sendNewBooking() {
    datevalue.setHours(0, 0, 0, 0);
    axios
      .post("/hallbooking", {
        hall: hallname,
        date: datevalue.toLocaleDateString(),
        startTime: timevalue[0],
        endTime: timevalue[1],
      })
      .then(function (response) {
        // onAvail(false)
        setBooked(true)
        console.log("data inserted");
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
        // todo : timelogic

        if (
          (timevalue[0] < i.startTime && timevalue[1] <= i.startTime) ||
          (timevalue[0] >= i.endTime && timevalue[1] > i.endTime)
        ) {
        } else {
          onAvail(false);
        }
      }
    });

    console.log(avail);
    setBooked(false);
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
            <DatePicker name="date" minDate={new Date()} onChange={(e) => { setFirst(false); onDateChange(e) }} value={datevalue} />
            <TimeRangePicker
              name="time"
              minTime="8:00"
              maxTime="21:00"
              hourPlaceholder="hh"
              minutePlaceholder="mm"
              rangeDivider="to"
              format="h:mm a"
              onChange={(e) => { setFirst(false); onTimeChange(e) }}
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

        {/* {avail && first && <Text>It is available</Text>}
        {!avail && <Text>It is not available</Text>}
        {avail && first && (
          <Button onClick={sendNewBooking} colorScheme="linkedin" mt="20">
            Book Hall{" "}
          </Button>
        )} */}
        {first && (avail ?
          (booked ? (<Box><Text>{hallname} has been booked! </Text>
            <Text>Date: {datevalue.toLocaleDateString()}</Text>
            <Text>Time: {timevalue[0]}-{timevalue[1]}</Text></Box>) : (<Box><Text>It is available</Text>
              <Button onClick={sendNewBooking} colorScheme="linkedin" mt="20">
                Book Hall{" "}
              </Button></Box>) ): <Text>It is not available</Text>)}
      </Box>
    </Box>
  );
}
