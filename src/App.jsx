import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Counter from "./Components/Counter/Counter";
import Client from "./Components/Clients/Client";
import Services from "./Components/Services/Services"; // Optional for listing services
import Project from "./Components/Project/Project";
import ServicePage from "./Components/ServicePage/ServicePage"; // Ensure spelling is correct

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Counter /><Client /><Services /><Project /></>} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </Router>
  );
};

export default App;
