import { useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import BeritaFoto1 from "../../assets/berita/img-berita1.svg"
import BeritaFoto2 from "../../assets/berita/img-berita2.svg"
import BeritaFoto3 from "../../assets/berita/img-berita3.svg"

export default function Berita() {

  const sliderRef = useRef(null)

  const CARD_WIDTH = 460

const scroll = (dir) => {
  const container = sliderRef.current

  container.scrollBy({
    left: dir === "left" ? -420 : 420,
    behavior: "smooth"
  })
}


useEffect(() => {
  const container = sliderRef.current

  const auto = setInterval(() => {

    container.scrollBy({
      left: 2,
      behavior: "auto"
    })

    if (
      container.scrollLeft >=
      container.scrollWidth - container.clientWidth
    ) {
      container.scrollLeft = 0
    }

  }, 16)

  return () => clearInterval(auto)

}, [])


  const data = [
    {
      img: BeritaFoto1,
      title: "Cyber Security in the Digital Era",
      desc: "Melindungi data dari ancaman digital."
    },
    {
      img: BeritaFoto2,
      title: "Think Before You Click",
      desc: "Lindungi data dan perangkat dengan pengecekan link cepat dan akurat."
    },
    {
      img: BeritaFoto3,
      title: "Protecting What Matters",
      desc: "Menjaga privasi dan keamanan sistem."
    }
  ]

  return (
    <section className="py-24 overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-16">
        <div className="inline-block bg-[#E7F5EC] text-[#317356] px-6 py-2 rounded-full">
          Artikel
        </div>

        <h1 className="text-[#317356] text-[60px] font-bold mt-4">
          Berita & Edukasi
        </h1>
      </div>


     <div className="relative max-w-[1320px] mx-auto px-10">

  {/* BUTTON LEFT */}
  <button
    onClick={() => scroll("left")}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-20
    w-14 h-14 rounded-full bg-[#30A572] text-white
    flex items-center justify-center
    hover:scale-110 transition shadow-lg"
  >
    <ChevronLeft size={26}/>
  </button>

  {/* BUTTON RIGHT */}
  <button
    onClick={() => scroll("right")}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-20
    w-14 h-14 rounded-full bg-[#30A572] text-white
    flex items-center justify-center
    hover:scale-110 transition shadow-lg"
  >
    <ChevronRight size={26}/>
  </button>

  <div className="overflow-hidden">

    <div
      ref={sliderRef}
      className="flex gap-10 overflow-x-scroll no-scrollbar scroll-smooth"
    >

      {[...data, ...data, ...data].map((item, i) => (
        <div key={i} className="min-w-[380px]">

          <img
            src={item.img}
            className="rounded-3xl mb-4 w-full"
          />

          <h3 className="text-[22px] font-semibold">
            {item.title}
          </h3>

          <p className="text-gray-600 mt-2">
            {item.desc}
          </p>

          <p className="text-gray-400 text-sm mt-4 hover:text-[#30A572]">
            Selengkapnya
          </p>

        </div>
      ))}

    </div>

  </div>

</div>
    </section>
  )
}