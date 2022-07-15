import "./App.css";
import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HallBooking from "./pages/HallBooking";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/hallbooking" element={<HallBooking />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
