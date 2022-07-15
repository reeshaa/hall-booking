import { Link, Flex, Icon, Box } from "@chakra-ui/react";

export default function NavItem(props) {
  return (
    <Link
      href={props.link}
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
