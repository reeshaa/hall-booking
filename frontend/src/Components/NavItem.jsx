import { Flex, Icon, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavItem(props) {
  console.log(props.link);
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
        _hover={{
          bg: "teal.300",
          color: "white",
        }}
        // {...rest}
      >
        {props.icon}

        <Box ml="4">{props.text}</Box>
      </Flex>
    </Link>
  );
}
