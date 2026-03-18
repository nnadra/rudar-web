import { useState, useEffect } from "react";
import logo from "../assets/rudar logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* Logo */}
        <img src={logo} alt="logo" className="h-8 md:h-10" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center bg-[#F0F9E8] rounded-[30px] px-6 py-3">
          <ul className="flex gap-6 font-medium text-[#12462F] items-center">
            <li
              onClick={() => scrollToSection("about-us")}
              className="cursor-pointer transition-colors duration-300 hover:text-[#30A572]"
            >
              Tentang Kami
            </li>

            <li>
              <Link
                to="/detail-deteksi"
                className="transition-colors duration-300 hover:text-[#30A572]"
              >
                Deteksi Situs
              </Link>
            </li>

            <li>
              <Link
                to="/pelaporan"
                className="transition-colors duration-300 hover:text-[#30A572]"
              >
                Pelaporan
              </Link>
            </li>

            <li
              onClick={() => scrollToSection("artikel")}
              className="cursor-pointer transition-colors duration-300 hover:text-[#30A572]"
            >
              Artikel
            </li>

            <li
              onClick={() => scrollToSection("kontak")}
              className="cursor-pointer transition-colors duration-300 hover:text-[#30A572]"
            >
              Kontak
            </li>
          </ul>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-[#30A572] text-white px-6 py-2 rounded-[10px] hover:opacity-90">
          Login
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
        >
          {/* Top */}
          <span
            className={`absolute w-6 h-0.5 bg-[#30A572] transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          {/* Middle */}
          <span
            className={`absolute w-6 h-0.5 bg-[#30A572] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          {/* Bottom */}
          <span
            className={`absolute w-6 h-0.5 bg-[#30A572] transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 font-medium text-[#12462F]">
          
          <li
            onClick={() => scrollToSection("about-us")}
            className="cursor-pointer transition-colors duration-300 hover:text-[#30A572] active:text-[#30A572]"
          >
            Tentang Kami
          </li>

          <li>
            <Link
              to="/detail-deteksi"
              className="block transition-colors duration-300 hover:text-[#30A572] active:text-[#30A572]"
            >
              Deteksi Situs
            </Link>
          </li>

          <li>
            <Link
              to="/pelaporan"
              className="block transition-colors duration-300 hover:text-[#30A572] active:text-[#30A572]"
            >
              Pelaporan
            </Link>
          </li>

          <li
            onClick={() => scrollToSection("artikel")}
            className="cursor-pointer transition-colors duration-300 hover:text-[#30A572] active:text-[#30A572]"
          >
            Artikel
          </li>

          <li
            onClick={() => scrollToSection("kontak")}
            className="cursor-pointer transition-colors duration-300 hover:text-[#30A572] active:text-[#30A572]"
          >
            Kontak
          </li>

          <button className="mt-4 bg-[#30A572] text-white px-6 py-2 rounded-[10px] active:opacity-80">
            Login
          </button>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;