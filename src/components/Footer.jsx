import { Youtube, Facebook, Instagram, Mail } from "lucide-react";
import rudarLogo from '../assets/logo-white-rudar.svg';


export default function Footer() {
  return (
    <footer className="bg-[#2F9E73] text-white rounded-t-[60px] px-12 pt-14 pb-6">
      
      {/* Top Section */}
      <div className="grid grid-cols-2 gap-10">

        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src={rudarLogo} alt="logo" className="w-12" />
            <h2 className="text-xl ">uang Sadar</h2>
          </div>

          {/* Social Media */}
          <div className="flex gap-4">
            <div className="border border-white rounded-full p-3">
              <Youtube size={18} />
            </div>
            <div className="border border-white rounded-full p-3">
              <Facebook size={18} />
            </div>
            <div className="border border-white rounded-full p-3">
              <Instagram size={18} />
            </div>
            <div className="border border-white rounded-full p-3">
              <Mail size={18} />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-3 gap-10">

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
      <div className="flex justify-between items-center mt-12 text-sm">
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