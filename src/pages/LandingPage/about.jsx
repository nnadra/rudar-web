// About.jsx
import aboutkanan from "../../assets/home/about-kanan.svg";
import aboutkiri from "../../assets/home/about-kiri.svg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-4 md:px-12 py-6 md:py-8">

      {/* Header */}
      <h6 className="text-[#30A572] font-medium text-center">Kenalan dengan Rudar</h6>
      <h3 className="text-center mt-2 text-2xl md:text-3xl font-semibold">Ruang Sadar</h3>
      <p className="text-center text-[#959595] mt-4 max-w-2xl mx-auto text-sm md:text-base">
        Platform digital untuk melawan judi online. Deteksi situs berisiko, laporkan dengan cepat,
        dan dapatkan dukungan AI cerdas untuk menjaga diri tetap aman di dunia digital.
      </p>

      {/* Main Section: Image | Visi/Misi | Image */}
      <section className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 mt-8 md:mt-12">

        {/* Gambar kiri */}
        <div className="w-full md:w-1/4 rounded-[20px] overflow-hidden shrink-0">
          <img src={aboutkiri} alt="image kiri" className="w-full h-full object-cover" />
        </div>

        {/* Visi & Misi */}
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/3 mt-4 md:mt-0">

          {/* Visi */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#30A572] rounded-[20px] p-4 flex-1 flex flex-col cursor-pointer"
          >
            <div className="rounded-lg bg-white/50 p-2 mb-2 max-w-20">
              <h6 className="text-white uppercase font-semibold tracking-[1.6px] text-center">Visi</h6>
            </div>
            <p className="text-white text-left text-base pt-6 flex-1">
              Menciptakan ruang digital yang aman, sehat, dan bebas dari pengaruh judi online
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#232323] rounded-[20px] p-4 flex-1 flex flex-col cursor-pointer"
          >
            <div className="rounded-lg bg-white/50 p-2 mb-2 max-w-20">
              <h6 className="text-white uppercase font-semibold tracking-[1.6px] text-center">Misi</h6>
            </div>
            <p className="text-white text-left text-base pt-6 flex-1">
              Meningkatkan kesadaran dan literasi digital masyarakat melalui edukasi, teknologi deteksi, sistem pelaporan, dan AI yang responsif.
            </p>
          </motion.div>

        </div>

        {/* Gambar kanan */}
        <div className="w-full md:w-1/4 rounded-[20px] overflow-hidden shrink-0 mt-4 md:mt-0">
          <img src={aboutkanan} alt="image kanan" className="w-full h-full object-cover" />
        </div>

      </section>
    </section>
  );
}