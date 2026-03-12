import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/LandingPage/index.jsx";
import About from "./pages/LandingPage/about.jsx";
import Deteksi from "./pages/LandingPage/deteksi.jsx";
import Pelaporan from "./pages/Features/pelaporan.jsx";
import Artikel from "./pages/LandingPage/berita.jsx";
import Kontak from "./pages/LandingPage/kontak.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/deteksi-situs" element={<Deteksi />} />
        <Route path="/pelaporan" element={<Pelaporan />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
