import { Link } from "react-router-dom";
import deteksikanan from "../../assets/home/deteksi-kanan.svg";


export default function Deteksi() {
    return (
        <section className="px-6 md:px-12 py-16 md:py-20">
            {/* Judul Section dengan animasi */}
            <h1 className="text-4xl md:text-[60px] font-bold text-[#317356] text-center mb-12">
                <span className="relative inline-block overflow-hidden">
                    {/* Highlight animasi desktop only */}
                    <span className="hidden lg:block absolute bottom-0 left-0 w-full h-1/2 bg-[#FFC533] opacity-50 animate-slide-left-right"></span>
                    <span className="relative z-10">Deteksi Situs dan Laporkan</span>
                </span>
            </h1>

            {/* Container utama dengan rounded + overflow-hidden supaya gambar ikut rounded */}
            <div className="bg-[#E9F7F3] rounded-[30px] overflow-hidden">
                <div className="flex flex-col md:flex-row items-start md:items-end gap-12">

                    {/* Kiri: Teks + tombol */}
                    <div className="flex-1 px-6 md:px-12 py-12 md:py-20">
                        <h2 className="text-3xl md:text-5xl font-semibold text-[#30A572] mb-8">
                            Cek & Lindungi diri dari Judi Online
                        </h2>

                        <p className="text-[#232323] mb-8 text-[16px] md:text-[20px] leading-relaxed">
                            Cek link mencurigakan dan laporkan situs berbahaya agar <br className="hidden md:block" /> segera ditindaklanjuti.
                        </p>

                        <div className="flex gap-4 flex-wrap mt-10">
                            {/* Tombol Laporkan */}
                            <Link
                                to="/pelaporan"
                                className="bg-[#232323] text-white uppercase tracking-[1.6px] px-6 py-3 rounded-lg hover:opacity-90 transition font-medium"
                            >
                                Laporkan
                            </Link>

                            {/* Tombol Deteksi Situs */}
                            <Link
                                to="/detail-deteksi"
                                className="bg-[#FFC533] text-white uppercase tracking-[1.6px] px-6 py-3 rounded-lg hover:opacity-90 transition font-medium"
                            >
                                Deteksi Situs
                            </Link>
                        </div>
                    </div>

                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex items-end">
                        <img
                            src={deteksikanan}
                            alt="deteksi-kanan"
                            className="w-full"
                        />
                    </div>

                </div>
            </div>

            {/* Animasi CSS */}
            <style jsx>{`
                @keyframes slide-left-right {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
                }
                .animate-slide-left-right {
                  animation: slide-left-right 6s linear infinite; /* lambat dan smooth */
                }
            `}</style>
        </section>
    );
}