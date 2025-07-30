import ImageGallery from '../components/ImageGallery';

const Pengumuman = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background with opacity using pseudo-element */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('./bg-fix.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "auto",
          backgroundPosition: "center center",
          opacity: 0.4,
        }}
      />

      {/* Judul Halaman */}
      <section className="pt-16 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12 text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#11403A] aestera">Pengumuman</h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-3 md:mb-4 text-justify text-gray-700">Menyajikan pengumuman seputar desa Sukopuro</p>
          </div>
        </div>
      </section>
    
      <div className="min-h-screen px-4">
        <div className="max-w-6xl mx-auto">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
};

export default Pengumuman;