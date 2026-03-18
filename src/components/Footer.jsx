import { Youtube, Facebook, Instagram, Mail } from "lucide-react";
import rudarLogo from '../assets/logo-white-rudar.svg';


export default function Footer() {
  return (
    <footer className="bg-[#2F9E73] text-white rounded-t-[40px] md:rounded-t-[60px] px-6 md:px-12 pt-10 md:pt-14 pb-6">
      
      {/* Top Section */}
      <div className="grid grid-cols-2 gap-10 mr-1">

        {/* Left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex items-center gap-3">
            <img src={rudarLogo} alt="logo" className="w-12" />
            <h2 className="text-xl ">uang Sadar</h2>
          </div>

          {/* Social Media */}
         <div className="grid grid-cols-4 gap-4 w-fit">
            <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
              <Youtube size={18} />
            </div>
            <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
              <Facebook size={18} />
            </div>
            <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
              <Instagram size={18} />
            </div>
            <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
              <Mail size={18} />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div>
            <h2 className="font-semibold mb-3">Navigasi</h2>
            <div className="flex flex-col gap-2 text-sm">
              <p>Tentang Kami</p>
              <p>Deteksi Situs</p>
              <p>Pelaporan</p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Pusat Bantuan</h2>
            <div className="flex flex-col gap-2 text-sm">
              <p>Hubungi Kami</p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Narasumber</h2>
            <div className="flex flex-col gap-2 text-sm">
              <p>Berita</p>
              <p>Edukasi</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-sm gap-4 text-center md:text-left">
        <p>© Copyright 2026 - Ruang Sadar</p>

        <div className="flex gap-6">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
      </div>

    </footer>
  );
}