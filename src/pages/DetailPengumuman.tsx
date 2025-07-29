import React from "react";
import { CalendarDays, ArrowLeft } from "lucide-react";
import pengumumanImage from "../assets/picture/DetailPengumuman.png";


const PengumumanDetail: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Gambar Header */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('./src/assets/picture/bg-fix.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "auto",
          backgroundPosition: "center center",
          opacity: 0.4,
        }}
      />
      <div className="relative w-full h-[760px]">
        <img
          src={pengumumanImage}
          alt="Gambar Pengumuman"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-t from-white/100 via-white/50 to-transparent"></div>
        <div className="absolute bottom-35 md:left-25">
          <h1 className="text-4xl md:text-6xl font font-serif text-white p-2">
            Judul Pengumuman
          </h1>
          <div className="flex items-center text-white mt-10 text-lg md:text-xl p-2">
            <CalendarDays className="w-5 h-5 mr-2" />
            Senin, 1 Januari 2025
          </div>

        </div>
      </div>

      {/* Isi Pengumuman */}
      <section className="px- md:px-25 py-10 mt-10">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('../src/assets/picture/bg-fix.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "auto",
          backgroundPosition: "center center",
          opacity: 0.4,
        }}
      />
        <p className="text-gray-700 leading-relaxed text-justify mb-6 p-2">
          Deskripsi Pengumuman Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify mb-6 p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify p-2">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt.
        </p>

        {/* Tombol Kembali */}
        <div className="flex justify-center mt-10">
          <button className="bg-yellow-400 text-black font-semibold px-10 py-1 rounded hover:bg-yellow-300 active:bg-yellow-500 flex items-center gap-2">
            <ArrowLeft size={18} />
            <a href="/pengumuman">Kembali</a>
          </button>
        </div>
      </section>
    </main>
  );
};

export default PengumumanDetail;
