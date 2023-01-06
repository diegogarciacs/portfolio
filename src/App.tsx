import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App" data-theme={"forest"}>
      <Router>
        <Navbar />
        <Home></Home>
        <Routes>{<Route path="/" />}</Routes>
      </Router>
    </div>
  );
}

export default App;
