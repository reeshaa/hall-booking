import { Box, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export default function NavItem(props) {
  console.log(props.link);
  const location = useLocation();

  return (
    <Link
      to={props.link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        colorScheme="linkedin"
        style={
          props.link === location.pathname ||
          (location.pathname == "/hallbooking" && props.link == "/")
            ? { background: "#BAE9FE", color: "black" }
            : {}
        }
      >
        {props.icon}

        <Box ml="4">{props.text}</Box>
      </Flex>
    </Link>
  );
}
