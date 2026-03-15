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
    <div className="text-center mt-20 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Deteksi Situs !
      </h1>

      <input
        type="text"
        placeholder="Masukkan link yang ingin diperiksa..."
        className="w-150 p-4 rounded-full shadow"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />

      <br />

      <button
        onClick={periksa}
        className="mt-10 bg-yellow-400 px-8 py-3 rounded-xl text-white font-semibold"
      >
        Periksa Tautan
      </button>

    </div>
  );
}