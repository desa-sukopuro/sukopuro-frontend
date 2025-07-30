const ProdukHukumDetail = () => {
  return (
    <div className="min-h-screen pt-20 relative">
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
      
      <section className="py-8 md:py-12 lg:py-16 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <button className="bg-yellow-400 text-sm px-4 py-2 rounded mb-9 hover:bg-yellow-500 transition">
            ← Kembali
          </button>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center aestera">
            Undang Undang Dasar Negara Republik Indonesia
          </h1>

          <div className="bg-white rounded-xl shadow-md p-4 max-w-2xl mx-auto">
            <img src="./src/assets/picture/uud2.jpeg" alt="Dokumen UUD" className="w-full mb-4 border-2 border-[#07343f]" />
            <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4 text-justify text-sm">
              UNDANG-UNDANG DASAR NEGARA REPUBLIK INDONESIA 1945<br /><br />
              Pembukaan: Bahwa sesungguhnya kemerdekaan itu ialah hak segala bangsa...<br /><br />
              Pasal 1<br />
              (1) Negara Indonesia ialah Negara Kesatuan yang berbentuk Republik.<br />
              (2) Kedaulatan adalah di tangan rakyat...
              <br /><br />
              Pasal 2<br />
              (1) Majelis Permusyawaratan Rakyat...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProdukHukumDetail;