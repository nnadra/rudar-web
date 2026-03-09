import koin from "../../assets/home/koin_home.svg";
import phone from "../../assets/home/phone.svg";
import bottom from "../../assets/home/home_bottom.svg";
import About from "./about.jsx";
import Deteksi from "./deteksi.jsx";
import Berita from './berita.jsx'
import Kontak from './kontak.jsx'

import { motion } from "framer-motion";

export default function Index() {

  // Fungsi scroll smooth
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-us");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-15">
      <div className="text-center">
        <h1 className="text-[72px] font-bold text-[#30A572]">
          Bangun Kesadaran <br />
          Putus Kecanduan!
        </h1>

        <p className="text-[20px] max-w-140 mx-auto mt-4">
          Lindungi diri dari bahaya judi online dengan teknologi yang tepat.
          Kenali risikonya, ambil tindakan, dan lawan mulai sekarang.
        </p>

        {/* Tombol scroll */}
        <motion.button
          onClick={scrollToAbout}
          className="mt-8 w-12 h-12 rounded-full bg-[#30A572] flex items-center justify-center mx-auto"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <i className="bx bx-chevron-down text-white text-4xl"></i>
        </motion.button>
      </div>

      {/* gambar kanan */}
      <img src={phone} alt="phone" className="absolute right-10 top-40 w-95" />

      {/* gambar kiri */}
      <img src={koin} alt="koin" className="absolute left-15 top-40 w-90" />

      {/* bottom */}
      <img
        src={bottom}
        alt="bottom decoration"
        className="absolute pt-30 left-0 w-full"
      />

      {/* About Section */}
      <section id="about-us">
        <About />
      </section>

      {/* Deteksi Section */}
      <Deteksi />

      {/* Berita Section */}
      <Berita />

      {/* Kontak Section */}
      <Kontak />

      
    </section>
  );
}