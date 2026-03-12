import logo from "../assets/rudar logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 pt-10">
      
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="h-10" />
      </div>

      {/* Menu */}
      <div className="bg-[#F0F9E8] rounded-[30px] px-6 py-3">
        <ul className="flex gap-6 font-medium text-[#12462F]">
          <li className="cursor-pointer hover:text-[#30A572]">Tentang Kami</li>
          <li className="cursor-pointer hover:text-[#30A572]">Deteksi Situs</li>
          <li>
            <Link to="/pelaporan" className="hover:text-[#30A572]">
              Pelaporan
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#30A572]">Artikel</li>
          <li className="cursor-pointer hover:text-[#30A572]">Kontak</li>
        </ul>
      </div>

      {/* Button */}
      <button className="bg-[#30A572] text-white px-6 py-2 rounded-[10px] hover:opacity-90">
        Login
      </button>

    </nav>
  );
};

export default Navbar;