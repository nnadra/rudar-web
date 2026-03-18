import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Deteksi() {
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const periksa = () => {
    if (!link) return;
    navigate("/hasil", {
      state: { url: link }
    });
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-20 py-16 mt-16">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-[#317356]">
        Deteksi Situs!
      </h1>

      <input
        type="text"
        placeholder="Masukkan link yang ingin diperiksa..."
        className="w-full md:w-2/3 lg:w-1/2 p-4 md:p-5 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />

      <button
        onClick={periksa}
        className="mt-6 md:mt-10 bg-yellow-400 hover:bg-yellow-500 transition px-6 md:px-8 py-3 md:py-4 rounded-xl text-white font-semibold w-full md:w-auto"
      >
        Periksa Tautan
      </button>

    </div>
  );
}