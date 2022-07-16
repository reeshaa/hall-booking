import React from "react";
import {
  Avatar,
  Box,
  Center,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FiBell, FiMenu } from "react-icons/fi";
import { HiInformationCircle, HiPhone, HiViewGrid } from "react-icons/hi";

import NavItem from "../Components/NavItem";

export default function CommonPage(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(props.heading);
  return (
    <Box>
      <SidebarContent display={{ base: "none", md: "block" }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen}></MobileNav>
    </Box>
  );
}

function SidebarContent(props) {
  return (
    <Box
      // transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Center>
          <Image mt="8" src="./RIT.png" h="5rem" alt={"Ramaiah logo"} />
        </Center>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={props.onClose}
        />
      </Flex>
      <Box mt="12">
        <NavItem text={"Dashboard"} icon={<HiViewGrid />} link={"/"}></NavItem>
        <NavItem
          text={"Recent Bookings"}
          icon={<HiInformationCircle />}
          link={"/recentBookings"}
        ></NavItem>
        <NavItem
          text={"Contact"}
          icon={<HiPhone />}
          link={"/contacts"}
        ></NavItem>
      </Box>
    </Box>
  );
}

function MobileNav(props) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20" //anyother value doesnt seem to work
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "space-between" }}
      // {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={props.onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text ml="3" fontSize="xl" fontWeight="bold">
        {/* {props.heading} */}
        Hall Booking Portal
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"md"}
                  src={
                    "data:image/jpeg;base64,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"
                    // "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                  mr="10"
                  pr="10"
                >
                  <Text fontSize="sm">DECA</Text>
                  <Text fontSize="xs" color="gray.600">
                    Logged in
                  </Text>
                </VStack>
              </HStack>
            </MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}
