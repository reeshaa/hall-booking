import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import BookingBody from "./Components/BookingBody";
import Contacts from "./Components/Contacts";
import DashboardBody from "./Components/DashboardBody";
import RecentBookings from "./Components/RecentBookings";
import CommonPage from "./pages/CommonPage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <CommonPage></CommonPage>
        <Routes>
          <Route exact path="/" element={<DashboardBody />} />
          <Route exact path="/hallbooking" element={<BookingBody />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/recentBookings" element={<RecentBookings />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
