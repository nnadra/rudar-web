import React, { useState } from "react";
import { Check, Upload, Copy, AlertTriangle, ArrowLeft } from "lucide-react";

export default function Pelaporan() {
  const [submitted, setSubmitted] = useState(false);
  const [kategori, setKategori] = useState("");
  const [reportId, setReportId] = useState("");

  const generateReportId = () => {
    const rand = Math.floor(Math.random() * 9000 + 1000);
    return `LRP-${Date.now().toString().slice(-8)}-${rand}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReportId(generateReportId());

    // animasi delay biar smooth
    setTimeout(() => {
      setSubmitted(true);
    }, 200);
  };

  const copyId = () => {
    navigator.clipboard.writeText(reportId);
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-lg md:max-w-3xl">

        {/* SCREEN FORM */}
        {!submitted && (
          <div className="animate-fade">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Pelaporan Ancaman digital
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <label className="text-sm">Nama Pelapor</label>
                  <input
                    required
                    className="w-full mt-2 px-5 py-3 rounded-full bg-[#E6EDE1]"
                    placeholder="Tulis judul laporan disini"
                  />
                </div>

                <div>
                  <label className="text-sm">No. Telp</label>
                  <input
                    required
                    className="w-full mt-2 px-5 py-3 rounded-full bg-[#E6EDE1]"
                    placeholder="Tulis no telp pelapor disini"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm">Link Terkait</label>
                <input
                  required
                  className="w-full mt-2 px-5 py-3 rounded-full bg-[#E6EDE1]"
                  placeholder="Taro link yang ingin di laporkan disini"
                />
              </div>

              {/* kategori */}
              <div>
                <label className="text-sm">Kategori</label>

                <div className="flex gap-3 mt-3 flex-wrap">
                  {[
                    "Situs Web Ilegal",
                    "Aplikasi Mobile",
                    "Iklan Online",
                    "Lainnya",
                  ].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setKategori(item)}
                      className={`px-4 py-2 rounded-full border transition text-sm md:text-base
                      ${
                        kategori === item
                          ? "bg-green-600 text-white border-green-600"
                          : "border-green-600 text-green-700"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* upload */}
               <div>
            <label className="text-sm">Bukti Gambar</label>

            <label className="mt-3 flex flex-col items-center justify-center border-2 border-dashed border-[#C7D2C0] bg-[#E6EDE1] rounded-xl h-32 md:h-40 cursor-pointer">
              <Upload size={24} className="text-green-600" />
              <span className="text-sm mt-2 text-gray-700">
                Pilih file yang ingin di upload
              </span>
              <span className="text-xs text-gray-500">Max 500 MB</span>

              <input type="file" className="hidden" />
            </label>
          </div>

              <button className="w-full py-4 bg-[#30A572] text-white rounded-xl hover:bg-green-700 transition">
                Kirim Pesan
              </button>
            </form>
          </div>
        )}

        {/* SCREEN SUCCESS */}
        {submitted && (
          <div className="animate-success text-center">

            <div className="flex justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="text-green-600" size={30}/>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-6">
              Laporan Berhasil DiKirim!
            </h2>

            <div className="mt-8 border-2 border-green-600 rounded-xl p-6 flex flex-col md:flex-row gap-4 md:justify-between md:items-center bg-[#E6EDE1]">
              <div className="text-left">
                <p className="text-sm">Nomor Laporan:</p>
                <h3 className="font-bold text-lg">{reportId}</h3>
                <p className="text-xs text-gray-500">
                  Simpan nomor ini untuk melacak status laporan anda
                </p>
              </div>

              <button
                onClick={copyId}
                className="bg-[#298B61] p-3 rounded-lg text-white"
              >
                <Copy size={18}/>
              </button>
            </div>

            <div className="mt-6 bg-[#FFF2D8] border border-yellow-300 rounded-lg p-4 flex gap-3 text-left">
              <AlertTriangle className="text-yellow-600"/>
              <div>
                <p className="font-medium text-sm">
                  Informasi Selanjutnya
                </p>
                <p className="text-xs">
                  Notifikasi Email akan dikirim saat ada pembaruan status.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={resetForm}
                className="flex items-center gap-2 border px-5 py-2 rounded-lg mx-auto"
              >
                <ArrowLeft size={16}/>
                Buat Laporan Baru
              </button>
            </div>

          </div>
        )}

      </div>

      {/* ANIMASI */}
      <style jsx>{`
        .animate-fade{
          animation: fade .5s ease;
        }

        .animate-success{
          animation: success .6s ease;
        }

        @keyframes fade{
          from{
            opacity:0;
            transform:translateY(20px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes success{
          from{
            opacity:0;
            transform:scale(.95);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }
      `}</style>

    </div>
  );
}