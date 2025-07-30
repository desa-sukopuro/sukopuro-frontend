import type React from "react"
import cobanJaheImg from "../assets/picture/cobanjahe.png"
import cobanBarnawiImg from "../assets/picture/cobanbarnawi.png"
import kolamPemancingImg from "../assets/picture/kolampemancingan.png"
import hiburanMalamImg from "../assets/picture/acaramalam.png"
import heroPariwisataImg from "../assets/picture/heropariwisata.png"

const Pariwisata: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: "url('./src/assets/picture/bg-fix.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "auto",
          backgroundPosition: "center",
        }}
      />

      {/* Hero Section */}
      <div className="relative h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
        <img
          src={heroPariwisataImg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-white/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center drop-shadow-xl aestera">
            Pariwisata
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 aestera mb-6 text-center">
            Destinasi Wisata Desa Sukopuro
          </h2>

          {/* Coban Jahe */}
          <div className="mb-24">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src={cobanJaheImg}
                  alt="Coban Jahe"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[16/9]"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#11403A] mb-4 aestera">Coban Jahe</h3>
                <p className="text-gray-700 font-semibold text-base sm:text-lg leading-relaxed text-justify">
                  Nama “Jahe” berasal dari kata “pejahe” dalam bahasa Jawa, yang berarti “yang gugur”
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify mt-4">
                  Coban Jahe adalah destinasi wisata alam yang terletak di Desa Taji, Kecamatan Jabung, Kabupaten Malang. Air terjun setinggi 45 meter ini dikelilingi pepohonan rindang yang menciptakan suasana sejuk dan menyegarkan, cocok untuk melepas penat. Berjarak sekitar satu jam dari pusat Kota Malang, Coban Jahe mudah diakses dan menjadi favorit wisatawan lokal maupun luar daerah. Selain panorama alamnya yang memukau, tempat ini juga dilengkapi berbagai fasilitas seperti flying fox, river tubing, camping ground, playground anak, serta kafe unik di tepi sungai yang memungkinkan pengunjung bersantai sambil merendam kaki. Spot-spot foto menarik seperti gardu pandang dan jembatan bambu turut menambah daya tarik, menjadikan Coban Jahe cocok untuk wisata keluarga, healing, hingga sesi foto prewedding.
                </p>
              </div>
            </div>
          </div>

          {/* Coban Barnawi */}
          <div className="mb-24">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={cobanBarnawiImg}
                  alt="Coban Barnawi"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[16/9]"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-[#11403A] mb-4 aestera lg:text-left text-right">Coban Barnawi</h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                  Coban Barnawi merupakan salah satu destinasi wisata alam tersembunyi di Desa Sukopuro, Kecamatan Jabung, Kabupaten Malang. Air terjun ini belum banyak dikenal wisatawan karena masih tergolong alami dan belum dikelola secara komersial oleh pemerintah maupun swasta. Meskipun demikian, keindahan alamnya sangat memukau dengan suasana yang tenang, segar, dan jauh dari keramaian, menjadikannya cocok untuk pencinta alam dan petualang yang mencari ketenangan. Air terjun Coban Barnawi memiliki ketinggian sedang dengan aliran air yang cukup stabil sepanjang tahun. Di bawahnya terdapat kolam alami yang tidak terlalu dalam sehingga aman untuk bermain air atau sekadar merendam kaki. Untuk mencapai lokasi air terjun, pengunjung harus berjalan kaki sekitar 1 hingga 2 kilometer dari area parkir melalui jalur trekking yang melewati kebun dan hutan. Perjalanan ini memberikan pengalaman tersendiri karena menawarkan pemandangan alam yang asri dan udara yang sangat sejuk. Karena belum dikelola secara resmi, Coban Barnawi tidak memungut tiket masuk alias gratis. Namun, fasilitas umum seperti toilet, warung, atau tempat sampah masih sangat terbatas, sehingga disarankan untuk membawa perlengkapan sendiri dan menjaga kebersihan selama berkunjung. Coban Barnawi sangat cocok untuk wisata minat khusus seperti jelajah alam, hiking ringan, atau sekadar mencari tempat healing yang sunyi dan alami. Jika dikelola dengan baik ke depannya, Coban Barnawi berpotensi menjadi salah satu ikon wisata alam unggulan di wilayah Jabung, Kabupaten Malang.
                </p>
              </div>
            </div>
          </div>

          {/* Kolam Pemancingan */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-[#11403A] mb-8 text-center aestera">Kolam Pemancingan KP SK 54</h3>
            <div className="max-w-5xl mx-auto">
              <img
                src={kolamPemancingImg}
                alt="Kolam Pemancingan"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[16/9] mb-6"
              />
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                Kolam Pemancingan KP SK 54 yang terletak di Desa Sukopuro, Kecamatan Jabung, Kabupaten Malang, merupakan salah satu bentuk inovasi usaha mikro masyarakat desa yang memadukan potensi lokal dengan semangat kewirausahaan. Didirikan oleh warga setempat, kolam ini tidak hanya menjadi tempat rekreasi bagi masyarakat sekitar, tetapi juga membuka peluang ekonomi baru, terutama di sektor informal seperti penjualan umpan, makanan ringan, dan minuman bagi para pemancing.
              </p>
            </div>
          </div>

          {/* Hiburan Malam */}
          <div className="mb-32">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src={hiburanMalamImg}
                  alt="Hiburan Malam"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[16/9]"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#11403A] mb-4 aestera">Acara Malam Rutin</h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                  Menampilkan suasana panggung hiburan malam yang meriah di Desa Sukopuro. Terlihat kerumunan warga berkumpul di depan panggung yang dihiasi dengan sorotan lampu warna-warni dan sound system besar, menunjukkan adanya pertunjukan musik atau acara komunitas. Suasana ramai dan antusias masyarakat mencerminkan semangat kebersamaan dan hiburan rakyat yang menjadi bagian dari tradisi atau perayaan desa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pariwisata
