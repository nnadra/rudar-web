import { useLocation, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Hasil() {
  const location = useLocation();
  const navigate = useNavigate();

  const url = location.state?.url || "https://contohlink.com";

  const data = [
    { name: "Sun", reach: 10000, activity: 8000, engaged: 6000 },
    { name: "Mon", reach: 15000, activity: 12000, engaged: 9000 },
    { name: "Tue", reach: 22000, activity: 14000, engaged: 12000 },
    { name: "Wed", reach: 10000, activity: 18000, engaged: 11000 },
    { name: "Thu", reach: 18000, activity: 16000, engaged: 13000 },
    { name: "Fri", reach: 16000, activity: 15000, engaged: 12000 },
    { name: "Sat", reach: 9000, activity: 7000, engaged: 6000 }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-16">

      <h1 className="text-4xl font-bold mb-10">
        Hasil Deteksi Situs
      </h1>

      {/* Warning */}
      <div className="bg-red-100 text-red-600 p-6 rounded-xl w-187.5 mb-6">
        <h3 className="font-bold mb-2">⚠️ Peringatan Penting</h3>
        <p className="text-sm">
          Hasil deteksi ini bersifat indikatif berdasarkan sistem analisis otomatis.
          Kami menyarankan pengguna untuk tetap berhati-hati dan tidak membagikan
          informasi pribadi atau melakukan transaksi pada situs yang mencurigakan.
        </p>
      </div>

      {/* Info Situs */}
      <div className="bg-gray-100 p-6 rounded-xl w-187.5 mb-8 text-gray-700">

        <p className="mb-3">🔗 {url}</p>

        <p className="mb-2">
          <strong>Status :</strong> Perlu Kewaspadaan
        </p>

        <p className="mb-4">
          <strong>Tingkat Resiko :</strong> Sedang
        </p>

        <p className="text-sm text-gray-600">
          Berdasarkan hasil analisis, tautan ini memiliki indikasi yang mencurigakan.
          Disarankan untuk tidak memasukkan data pribadi atau melakukan transaksi
          sebelum memastikan keamanannya.
        </p>

      </div>

      {/* Diagram */}
      <div className="bg-[#DDE6D5] p-6 rounded-xl w-187.5 mb-10">

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="engaged" fill="#1E40AF" radius={[4,4,0,0]} />
            <Bar dataKey="activity" fill="#2563EB" radius={[4,4,0,0]} />
            <Bar dataKey="reach" fill="#A3E635" radius={[4,4,0,0]} />

          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Button */}
      <div className="flex gap-6">

        <button className="bg-green-600 text-white px-8 py-3 rounded-lg">
          Laporkan Situs
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-[#DDE6D5] text-green-700 px-8 py-3 rounded-lg"
        >
          Kembali
        </button>

      </div>

    </div>
  );
}