import type React from "react";
import { Link } from "react-router-dom";
import pariwisataImg from "../assets/picture/pariwisata.png";
import umkmImg from "../assets/picture/umkm.png";
import pertanianImg from "../assets/picture/pertanian.png";
import bgImage from "../assets/picture/bg-fix.png"; // pastikan path ini benar

const PotensiDesa: React.FC = () => {
  const potensiList = [
    {
      title: "Pariwisata",
      description:
        "Desa Sukopuro menawarkan keindahan alam pedesaan, kebun buah, dan aktivitas pertanian tradisional sebagai wisata edukasi. Budaya lokal dan ramah tamah warga menambah daya tarik wisata.",
      image: pariwisataImg,
      link: "/pariwisata",
    },
    {
      title: "UMKM",
      description:
        "Desa Sukopuro memiliki UMKM unggulan berupa keripik singkong yang diolah melalui pendampingan sertifikasi halal dan SPARK, meningkatkan kapasitas daya saing dan desain produk.",
      image: umkmImg,
      link: "/umkm",
    },
    {
      title: "Pertanian",
      description:
        "Desa Sukopuro memiliki potensi pertanian yang besar dengan sumber daya alam yang berlimpah. Komoditas meliputi singkong, sayuran, dan buah lokal. Keramahan masyarakat membuat area pertanian ini berpotensi untuk agrowisata.",
      image: pertanianImg,
      link: "/pertanian",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-16 text-gray-800">
      {/* Background sesuai ProdukHukumDetail */}
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

      {/* Judul */}
      <div className="max-w-6xl mx-auto pt-8">
        <h1 className="text-4xl font-bold text-[#11403A] mb-2">Potensi Desa</h1>
        <p className="text-lg text-gray-600 mb-10">
          Segala hal mengenai potensi Desa Sukopuro
        </p>

        {/* Kartu Potensi */}
        <div className="grid md:grid-cols-3 gap-8">
          {potensiList.map((item, index) => (
            <div
              key={index}
              className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl bg-white"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#11403A] mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-700 mb-4 text-justify">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="inline-block bg-yellow-400 text-black px-6 py-2.5 text-sm font-semibold rounded-lg hover:bg-[#ECA804] hover:shadow-md transition-all duration-200"
                >
                  Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Deskripsi tambahan */}
        <div className="mt-16 mx-4 md:mx-16 lg:mx-24 text-justify text-gray-700 text-base leading-relaxed">
          <p>
            <span className="font-semibold text-[#11403A]">Desa Sukopuro</span> memiliki tiga potensi utama yang mendukung
            perkembangan wilayahnya, yaitu pariwisata, UMKM, dan pertanian. Sektor pariwisata menawarkan keindahan alam
            pedesaan yang asri dan budaya lokal yang masih lestari, menjadikannya daya tarik bagi wisatawan. Di sisi lain,
            UMKM berkembang melalui produk olahan seperti keripik singkong dan kopi tradisional, yang didukung inovasi
            pemasaran dan semangat kewirausahaan warga. Sementara itu, sektor pertanian menjadi tulang punggung desa
            dengan komoditas unggulan seperti singkong, sayuran, dan buah lokal, serta memiliki potensi besar untuk
            dikembangkan sebagai agrowisata edukatif.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PotensiDesa;
