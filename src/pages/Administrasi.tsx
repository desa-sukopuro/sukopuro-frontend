import React from "react";

const Administrasi = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background with opacity using pseudo-element */}
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

      {/* Hero Section */}
      <section className="py-8 md:py-12 lg:py-16 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#11403A] aestera">
                Administrasi
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-3 md:mb-4 text-justify text-gray-700">
                Menyediakan layanan administrasi kependudukan secara online, termasuk pembuatan Kartu Tanda Penduduk (KTP), Akta Kelahiran, Akta Kematian, serta layanan perubahan data pada Kartu Keluarga (KK). Dengan sistem yang mudah diakses dan efisien, pengguna dapat mengajukan permohonan dokumen penting tanpa harus datang langsung ke kantor pelayanan.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition duration-300 flex items-center gap-2 mx-auto lg:mx-0">
                Akses Daftar Layanan
                <span>→</span>
              </button>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 order-1 lg:order-2">
              <div className="w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 relative">
                <img src="./src/assets/picture/administrasi.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Hukum Section */}
      <section className="py-8 md:py-12 lg:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl md:rounded-3xl drop-shadow-stone-800 p-4 md:p-6 lg:p-8 bg-white overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-120 h-120 bg-gradient-to-bl from-blue-400 to-transparent rounded-full blur-2xl opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-120 h-120 bg-gradient-to-tr from-blue-400 to-transparent rounded-full blur-2xl opacity-40 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 md:mb-8 gap-4">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 aestera">Produk Hukum</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4 text-justify">Menyediakan produk hukum desa sukopuro</p>
                </div>
                <div className="relative w-full lg:w-auto">
                  <input
                    type="text"
                    placeholder="search"
                    className="w-full lg:w-64 bg-gray-100 border-none rounded-full px-4 py-3 pl-12 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                {[1, 2, 3].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition duration-300"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                      <div className="sm:w-48 w-full">
                        <div className="w-full h-full border-2 border-teal-900 overflow-hidden">
                          <img
                            src="./src/assets/picture/uud2.jpeg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-1 text-start">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-teal-800 mb-2 md:mb-3 leading-tight aestera">
                          Undang Undang Dasar Negara Republik Indonesia
                        </h3>
                        <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                          Berisikan Undang Undang Dasar Negara Indonesia yang membahas tentang ...
                        </p>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 md:px-6 py-2 rounded-lg transition duration-300 flex items-center gap-2 w-full sm:w-fit text-sm md:text-base">
                          Akses
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-1 md:gap-2 mt-6 md:mt-8">
                <button className="px-2 md:px-3 py-1 md:py-2 border border-gray-300 rounded text-sm md:text-base hover:bg-gray-50 transition">&lt;</button>
                <button className="px-2 md:px-3 py-1 md:py-2 border border-gray-300 rounded bg-teal-800 text-white text-sm md:text-base">1</button>
                <button className="px-2 md:px-3 py-1 md:py-2 border border-gray-300 rounded text-sm md:text-base hover:bg-gray-50 transition">2</button>
                <button className="px-2 md:px-3 py-1 md:py-2 border border-gray-300 rounded text-sm md:text-base hover:bg-gray-50 transition">3</button>
                <button className="px-2 md:px-3 py-1 md:py-2 border border-gray-300 rounded text-sm md:text-base hover:bg-gray-50 transition">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Administrasi;