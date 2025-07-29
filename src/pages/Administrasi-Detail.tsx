const ProdukHukumDetail = () => {
  return (
    <main className="px-4 py-10 text-gray-800 mt-16 max-w-7xl relative min-h-screen overflow-hidden">
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
      <button className="bg-yellow-400 text-sm px-4 py-2 rounded mb-9 hover:bg-yellow-500 transition">
        ← Kembali
      </button>

      <h1 className="text-4xl font-bold text-[#07343f] text-center mb-6 aestera">
        Undang Undang Dasar Negara
      </h1>
      <h1 className="text-4xl font-bold text-[#07343f] text-center mb-6 aestera"> Republik Indonesia
      </h1>

      <div className="bg-white rounded-xl shadow-md p-4 max-w-2xl mx-auto">
        <img src="./src/assets/picture/uud2.jpeg" alt="Dokumen UUD" className="w-full mb-4 border-2 border-[#07343f]" />
        <p className="leading-relaxed text-sm">
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
    </main>
  );
};

export default ProdukHukumDetail;
