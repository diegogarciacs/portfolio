import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

// import Home from "./pages/Home";

function App() {
  return (
    <div className="App" data-theme={"forest"}>
      <Router>
        <Navbar />
        <Home></Home>
        <Portfolio></Portfolio>
        <Footer />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
