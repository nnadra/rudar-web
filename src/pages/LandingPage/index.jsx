import bg from "../../assets/home/bg-home.svg";
import bottom from "../../assets/home/home_bottom.svg";
import About from "./about.jsx";
import Deteksi from "./deteksi.jsx";
import Berita from "./berita.jsx";
import Kontak from "./kontak.jsx";

import { motion } from "framer-motion";

export default function HomePage() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-us");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">

      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center text-center
                      px-6 sm:px-8 md:px-10 lg:px-20
                      min-h-125 sm:min-h-150 md:min-h-175 lg:min-h-200
                      pt-0 sm:pt-10 md:pt-16 lg:pt-20
                      pb-16 sm:pb-20 md:pb-24 lg:pb-32
                      bg-white">

        {/* Desktop/Tablet Background */}
        <div className="hidden md:block absolute inset-0 z-0"
             style={{
               backgroundImage: `url(${bg})`,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundSize: 'cover', 
             }} />

        {/* Hero Text */}
        <h1 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] font-bold text-[#30A572] leading-snug sm:leading-snug md:leading-tight lg:leading-tight z-10 relative">
          Bangun Kesadaran <br />
          Putus Kecanduan!
        </h1>

        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] max-w-xl sm:max-w-2xl mt-4 z-10 relative">
          Lindungi diri dari bahaya judi online dengan teknologi yang tepat.
          Kenali risikonya, ambil tindakan, dan lawan mulai sekarang.
        </p>

        <motion.button
          onClick={scrollToAbout}
          className="mt-6 w-12 h-12 rounded-full bg-[#30A572] flex items-center justify-center z-10 relative"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <i className="bx bx-chevron-down text-white text-4xl"></i>
        </motion.button>

        {/* Mobile Bottom Image */}
        <img src={bottom} alt="bottom decoration"
             className="block md:hidden absolute bottom-0 left-0 w-full object-cover" />
      </div>

      {/* Sections */}
      <section id="about-us" className="md:-mt-4">
        <About />
      </section>
      <section>
        <Deteksi />
      </section>
      <section>
        <Berita />
      </section>
      <section>
        <Kontak />
      </section>
    </section>
  );
}