import "./App.css";
import React, { useEffect, useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import DashboardBody from "./Components/DashboardBody";
import CommonPage from "./pages/CommonPage";
import BookingBody from "./Components/BookingBody";
import RecentBookings from "./Components/RecentBookings";
import Contacts from "./Components/Contacts";

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
