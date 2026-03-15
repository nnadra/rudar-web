import aboutkanan from "../../assets/home/about-kanan.svg";
import aboutkiri from "../../assets/home/about-kiri.svg";
import { motion } from "framer-motion"; 

export default function About() {
  return (
    <section className="px-12 py-12 mt-60">

      {/* Header */}
      <h6 className="text-[#30A572] font-medium text-center">Kenalan dengan Rudar</h6>
      <h3 className="text-center mt-2 text-3xl font-semibold">Ruang Sadar</h3>
      <p className="text-center text-[#959595] mt-4 max-w-2xl mx-auto">
        Platform digital untuk melawan judi online. Deteksi situs berisiko, laporkan dengan cepat,
        dan dapatkan dukungan AI cerdas untuk menjaga diri tetap aman di dunia digital.
      </p>

      {/* Main Section: Image | Visi/Misi | Image */}
      <section className="flex justify-center items-stretch gap-8 mt-12">

        {/* Gambar kiri */}
        <div className="w-1/4 rounded-[30px] overflow-hidden shrink-0">
          <img src={aboutkiri} alt="image kiri" className="w-full h-full object-cover" />
        </div>

        {/* Visi & Misi */}
        <div className="flex flex-col gap-6 w-1/3">

          {/* Visi */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }} // zoom + sedikit naik
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#30A572] rounded-[20px] p-4 flex-1 flex flex-col cursor-pointer"
          >
            <div className="rounded-lg bg-white/50 p-2 mb-2 max-w-20">
              <h6 className="text-white uppercase font-semibold tracking-[1.6px] text-center">Visi</h6>
            </div>
            <p className="text-white text-left text-base pt-8 flex-1">
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
            <p className="text-white text-left text-base pt-8 flex-1">
              Meningkatkan kesadaran dan literasi digital masyarakat melalui edukasi, teknologi deteksi, sistem pelaporan, dan AI yang responsif.
            </p>
          </motion.div>

        </div>

        {/* Gambar kanan */}
        <div className="w-1/4 rounded-[30px] overflow-hidden shrink-0">
          <img src={aboutkanan} alt="image kanan" className="w-full h-full object-cover" />
        </div>

      </section>
    </section>
  );
}