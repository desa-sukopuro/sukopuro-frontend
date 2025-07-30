import type React from "react"
import cobanJaheImg from "../assets/picture/cobanjahe.png"
import cobanBarnawiImg from "../assets/picture/cobanbarnawi.png"
import kolamPemancingImg from "../assets/picture/kolampemancingan.png"
import hiburanMalamImg from "../assets/picture/acaramalam.png"
import heroPariwisataImg from "../assets/picture/heropariwisata.png"

const Pariwisata: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
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
      <div className="relative h-screen overflow-hidden">
        <img
          src={heroPariwisataImg || "/placeholder.svg"}
          alt="Waterfall background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-white/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white text-center drop-shadow-2xl tracking-wide">
            Pariwisata
          </h1>
        </div>
        {/* Navigation arrows */}
        <button className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-200 hover:scale-110 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer bg-black/20 hover:bg-black/40 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
          ‹
        </button>
        <button className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-200 hover:scale-110 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer bg-black/20 hover:bg-black/40 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
          ›
        </button>
      </div>

      {/* Content Sections */}
      <section className="py-8 md:py-12 lg:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center text-gray-800 aestera">Destinasi Wisata Desa Sukopuro</h2>
          <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4 text-justify text-gray-600 max-w-4xl mx-auto mb-12">
            Desa Sukopuro menawarkan berbagai destinasi wisata alam yang memukau dengan keindahan air terjun, kolam pemancingan, dan hiburan malam yang menarik untuk dikunjungi.
          </p>
          
          {/* Coban Jahe Section */}
          <div className="mb-24">
            <h3 className="text-5xl font-bold text-[#11403A] mb-12 aestera">Coban Jahe</h3>
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <div className="order-2 lg:order-1">
                <div className="h-full">
                  <img
                    src={cobanJaheImg || "/placeholder.svg"}
                    alt="Coban Jahe waterfall"
                    className="w-full h-full object-cover rounded-2xl shadow-xl border-0"
                  />
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <p className="text-xl font-semibold text-[#11403A] leading-relaxed">
                  Nama "Jahe" berasal dari kata "pejahe" dalam bahasa Jawa, yang berarti "yang gugur"
                </p>
                <p className="text-gray-700 text-justify leading-relaxed text-lg">
                  Coban Jahe adalah destinasi wisata alam yang terletak di Desa Taji, Kecamatan Jabung, Kabupaten Malang.
                  Air terjun setinggi 45 meter ini dikelilingi pepohonan rindang yang menciptakan suasana sejuk dan
                  menyegarkan, cocok untuk melepas penat. Berjarak sekitar satu jam dari pusat Kota Malang, Coban Jahe
                  mudah diakses dan menjadi favorit wisatawan lokal maupun luar daerah. Selain panorama alamnya yang
                  memukau, tempat ini juga dilengkapi berbagai fasilitas seperti flying fox, river tubing, camping ground,
                  playground anak, serta kafe unik di tepi sungai yang memungkinkan pengunjung bersantai sambil merendam
                  kaki. Spot-spot foto menarik seperti gardu pandang dan jembatan bambu turut menambah daya tarik,
                  menjadikan Coban Jahe cocok untuk wisata keluarga, healing, hingga sesi foto prewedding.
                </p>
              </div>
            </div>
          </div>

          {/* Coban Barnawi Section */}
          <div className="mb-24">
            <h3 className="text-5xl font-bold text-[#11403A] mb-12 text-right aestera">Coban Barnawi</h3>
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="space-y-6">
              <p className="text-gray-700 text-justify leading-relaxed text-lg">
                Coban Barnawi merupakan salah satu destinasi wisata alam tersembunyi di Desa Sukopuro, Kecamatan Jabung,
                Kabupaten Malang. Air terjun ini belum banyak dikenal wisatawan karena masih tergolong alami dan belum
                dikelola secara komersial oleh pemerintah maupun swasta. Meskipun demikian, keindahan alamnya sangat
                memukau dengan suasana yang tenang, segar, dan jauh dari keramaian, menjadikannya cocok untuk pencinta
                alam dan petualang yang mencari ketenangan. Air terjun Coban Barnawi memiliki ketinggian sedang dengan
                aliran air yang cukup stabil sepanjang tahun. Di bawahnya terdapat kolam alami yang tidak terlalu dalam
                sehingga aman untuk bermain air atau sekadar merendam kaki. Untuk mencapai lokasi air terjun, pengunjung
                harus berjalan kaki sekitar 1 hingga 2 kilometer dari area parkir melalui jalur trekking yang melewati
                kebun dan hutan. Perjalanan ini memberikan pengalaman tersendiri karena menawarkan pemandangan alam yang
                asri dan udara yang sangat sejuk. Karena belum dikelola secara resmi, Coban Barnawi tidak memungut tiket
                masuk alias gratis. Namun, fasilitas umum seperti toilet, warung, atau tempat sampah masih sangat
                terbatas, sehingga disarankan untuk membawa perlengkapan sendiri dan menjaga kebersihan selama
                berkunjung. Coban Barnawi sangat cocok untuk wisata minat khusus seperti jelajah alam, hiking ringan,
                atau sekadar mencari tempat healing yang sunyi dan alami. Jika dikelola dengan baik ke depannya, Coban
                Barnawi berpotensi menjadi salah satu ikon wisata alam unggulan di wilayah Jabung, Kabupaten Malang.
              </p>
            </div>
            <div>
              <div className="h-full">
                <img
                  src={cobanBarnawiImg || "/placeholder.svg"}
                  alt="Coban Barnawi waterfall"
                  className="w-full h-full object-cover rounded-2xl shadow-xl border-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Kolam Pemancingan Section */}
        <div className="mb-24">
          <h3 className="text-5xl font-bold text-[#11403A] mb-12 text-center aestera">Kolam Pemancingan KP SK 54</h3>
          <div className="max-w-5xl mx-auto">
            <img
              src={kolamPemancingImg || "/placeholder.svg"}
              alt="Kolam Pemancingan KP SK 54"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl mb-12 border-0"
            />
            <p className="text-gray-700 text-justify leading-relaxed text-lg mx-8 md:mx-16">
              Kolam Pemancingan KP SK 54 yang terletak di Desa Sukopuro, Kecamatan Jabung, Kabupaten Malang, merupakan
              salah satu bentuk inovasi usaha mikro masyarakat desa yang memadukan potensi lokal dengan semangat
              kewirausahaan. Didirikan oleh warga setempat, kolam ini tidak hanya menjadi tempat rekreasi bagi
              masyarakat sekitar, tetapi juga membuka peluang ekonomi baru, terutama di sektor informal seperti
              penjualan umpan, makanan ringan, dan minuman bagi para pemancing.
            </p>
          </div>
        </div>

        {/* Acara Malam Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={hiburanMalamImg || "/placeholder.svg"}
                alt="Acara hiburan malam di Desa Sukopuro"
                className="w-full h-96 object-cover rounded-2xl shadow-xl border-0"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-5xl font-bold text-[#11403A] mb-8 aestera">Acara Hiburan Malam</h3>
              <p className="text-gray-700 text-justify leading-relaxed text-lg">
                Menampilkan suasana panggung hiburan malam yang meriah di Desa Sukopuro. Terlihat kerumunan warga
                berkumpul di depan panggung yang dihiasi dengan sorotan lampu warna-warni dan sound system besar,
                menunjukkan adanya pertunjukan musik atau acara komunitas. Suasana ramai dan antusias masyarakat
                mencerminkan semangat kebersamaan dan hiburan rakyat yang menjadi bagian dari tradisi atau perayaan
                desa.
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