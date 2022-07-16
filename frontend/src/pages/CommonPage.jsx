import React, { ReactNode } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
// import NavItem from "../components/NavItem";
import {
  Center,
  Image,
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { HiPhone, HiInformationCircle, HiViewGrid } from "react-icons/hi";

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
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Dr. Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Logged in
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              // onOverlayClick
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}
