import pengumumanpict from '../assets/picture/pengumuman pict.png';

const PengumumanPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Layer */}
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

      {/* Judul Halaman */}
      <section className="text-left px-6 md:px-25 py-10 mt-20">
        <h1 className="text-4xl font-aestera text-[#063247] aestera">Pengumuman</h1>
        <p className="text-sm font-inria mt-2">Menyajikan pengumuman seputar desa Sukopuro</p>
      </section>

      {/* Grid Kartu */}
      <section className="px-6 md:px-25 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.01] transition"
            >
              <img
                src={pengumumanpict}
                alt="Pengumuman"
                className="w-full h-40 object-cover min-h-[15rem] rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Judul Pengumuman</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Deskripsi pengumuman Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span>📅 Senin, 1 Januari 2025</span>
                  <a
                    href="pengumuman/123"
                    className="bg-yellow-400 text-black font-semibold px-3 py-1 rounded hover:bg-yellow-300 active:bg-yellow-500"
                  >
                    Selengkapnya →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center gap-2 pt-2 pb-6">
        <button className="border border-[#063247] px-3 py-1 rounded hover:bg-[#063247] hover:text-white">
          &lt;
        </button>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className={`px-3 py-1 rounded border border-[#063247] ${n === 1 ? 'bg-[#063247] text-white' : 'hover:bg-[#063247] hover:text-white'}`}
          >
            {n}
          </button>
        ))}
        <button className="border border-[#063247] px-3 py-1 rounded hover:bg-[#063247] hover:text-white">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PengumumanPage;

