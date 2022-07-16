import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function HallCard(props) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.500")}
        boxShadow={"xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        _groupHover={{
          backgroundColor: "primary.300",
          color: "pink",
        }}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"205px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 4,
            left: 0,
            // backgroundImage: `url(${props.imgsrc})`,
            backgroundColor: "#ABABAB",
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(10px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={210}
            width={282}
            objectFit={"cover"}
            src={props.imgsrc}
          />
        </Box>
        <Stack spacing={1} align={"center"}>
          <Text
            pt="8"
            pb="2"
            color={"gray.500"}
            fontSize={"xs"}
            textTransform={"uppercase"}
          >
            ({props.block})
          </Text>
          <Heading fontSize={"md"} fontFamily={"body"} fontWeight={800}>
            {props.hall}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontSize={"sm"}>Max Capacity : {props.capacity}</Text>
          </Stack>
        </Stack>
        <Link
          to="/hallbooking"
          state={props}
          style={{ textDecoration: "none" }}
        >
          <Button colorScheme="linkedin" mt="6" w="full" h="12">
            Book now
          </Button>
        </Link>
      </Box>
    </Center>
  );
}
