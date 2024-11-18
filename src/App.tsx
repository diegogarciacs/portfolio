import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Technologies from "./components/Technologies";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
      <AboutMe />
      <Technologies />
      <Footer />
    </>
  );
}

export default App;
