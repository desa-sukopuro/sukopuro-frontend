import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import fallback from '/No_Image_Available.svg';
import bgImage from '/bg-fix.png';

const ImageDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const entry = location.state?.entry;

  if (!entry) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "auto",
            backgroundPosition: "center center",
            opacity: 0.4,
          }}
        />

        {/* Content */}
        <section className="py-8 md:py-12 lg:py-16 px-4 mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#11403A] aestera">Data Tidak Ditemukan</h1>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-600">Mohon maaf, data pengumuman yang Anda cari tidak dapat ditemukan.</p>
              <button 
                onClick={() => navigate('/pengumuman')} 
                className="bg-[#11403A] hover:bg-[#0f3832] text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
              >
                Kembali ke Pengumuman
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "auto",
          backgroundPosition: "center center",
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <section className="py-8 md:py-12 lg:py-16 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#11403A] aestera">{entry.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{entry.timestamp}</p>
            <img
              src={entry.imageUrl}
              onError={(e) => (e.currentTarget.src = fallback)}
              alt={entry.title}
              className="w-full h-auto rounded-xl shadow-md mb-6"
            />
            <p className="text-base md:text-lg leading-relaxed text-justify text-gray-700 whitespace-pre-line">{entry.desc}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageDetail;