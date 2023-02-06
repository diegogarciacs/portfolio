import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Technologies from "./components/Technologies";
import AboutMe from "./pages/AboutMe";


function App() {
    return (
            <div className="App bg-neutral" data-theme={"forest"}>
                <Navbar />
                   <Home />
                    <Portfolio />
                    <AboutMe />
                   <Technologies />
                <Footer />
            </div>
    );
}

export default App;
