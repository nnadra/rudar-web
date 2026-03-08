import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/LandingPage/index.jsx";
import About from "./pages/LandingPage/about.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
