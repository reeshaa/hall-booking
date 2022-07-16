import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import HallCard from "./HallCard";

export default function DashboardBody() {
  return (
    <Box
      ml={{ base: 0, md: 60 }}
      bg={useColorModeValue("gray.100", "gray.900")}
      p="4"
      minH={"85vh"}
    >
      <Box pl="10" pr="10">
        <Grid templateColumns="repeat(3, 2fr)" gap={6}>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://5.imimg.com/data5/MH/AU/LZ/SELLER-9457619/complete-interior-technical-services-for-auditoriums-cinemas-schools-500x500.jpg"
              // imgsrc="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              block="ESB"
              hall="ESB BIG SEMINAR HALL"
              capacity="500"
            ></HallCard>
          </GridItem>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8&w=1000&q=80"
              block="ESB"
              hall="ESB SEMINAR HALL 2"
              capacity="300"
            ></HallCard>
          </GridItem>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3fK8XNplfliA1VexyVIbR_4__fFfr10K7eElaE7cJ6r6eVvNyQrzbjzwtyih5mhjHj8&usqp=CAU"
              block="DES"
              hall="HIGHTECH SEMINAR HALL"
              capacity="400"
            ></HallCard>
          </GridItem>{" "}
          <GridItem w="100%">
            <HallCard
              imgsrc="https://images.unsplash.com/photo-1588865198282-f1d9675e640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              block="LHC"
              hall="LHC SEMINAR HALL - 1"
              capacity="350"
            ></HallCard>
          </GridItem>{" "}
          <GridItem w="100%">
            <HallCard
              imgsrc="https://www.ramaiah-india.org/wp-content/uploads/2017/05/Ramaiah-gallery-19.jpg"
              block="LHC"
              hall="LHC SEMINAR HALL"
              capacity="350"
            ></HallCard>
          </GridItem>{" "}
          <GridItem w="100%">
            <HallCard
              imgsrc="https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg"
              block="HERITAGE"
              hall="BOARD MEETING ROOM"
              capacity="100"
            ></HallCard>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
