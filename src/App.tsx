import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Technologies from "./components/Technologies";
import AboutMe from "./pages/AboutMe";

// import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-neutral" data-theme={"forest"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
