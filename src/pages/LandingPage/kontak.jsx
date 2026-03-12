import React from "react";
import { Youtube, Facebook, Instagram, Mail } from "lucide-react";

export default function Kontak() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen">

      {/* LEFT */}
      <div className="flex flex-col justify-between p-16">

        <h1 className="text-5xl font-semibold leading-tight max-w-md text-[#232323]">
          Punya pertanyaan? <br />
          coba tanyakan <br />
          melalui kontak <br />
          kami!
        </h1>

        {/* Social */}
        <div className="flex gap-6 mt-12">

          {[Youtube, Facebook, Instagram, Mail].map((Icon, i) => (
            <div
              key={i}
              className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-300 hover:bg-green-700 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <Icon size={24} />
            </div>
          ))}

        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="bg-[#F0F9E8] flex items-center justify-center p-16">

        <form className="w-full max-w-xl space-y-6">

          {/* row */}
          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium text-[#232323]">Nama</label>
              <input
                type="text"
                placeholder="Tulis nama kamu disini"
                className="w-full px-6 py-4 rounded-full bg-white outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#232323]">Email</label>
              <input
                type="email"
                placeholder="Tulis email kamu disini"
                className="w-full px-6 py-4 rounded-full bg-white outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

          </div>

          {/* pesan */}
          <div>
            <label className="block mb-2 font-medium text-[#232323]">Pesan</label>
            <textarea
              rows="6"
              placeholder="Tulis Pesan mu disini ya!"
              className="w-full p-6 rounded-3xl bg-white outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-green-600 text-white font-semibold
            hover:bg-green-700
            active:scale-95
            transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Kirim Pesan
          </button>

        </form>
      </div>

    </section>
  );
}