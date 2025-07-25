import pertanianImg from "../assets/picture/pertanian.png";
import KebunPohonDuren from "../assets/picture/Kebun Pohon Duren.png";
import LadangSingkong from "../assets/picture/Ladang Singkong.png";
import LadangTebu from "../assets/picture/Ladang Tebu.png";
import LahanPersawahan from "../assets/picture/Lahan Persawahan.png";
import PeternakanSapiPerah from "../assets/picture/Peternakan Sapi Perah.png";



function PotensiPertanian() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${pertanianImg})`,
        }}
      >
        {/* Overlay gradasi putih di bawah */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center aestera drop-shadow-xl">
            Pertanian
          </h1>
        </div>
      </div>


      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* Ladang Singkong */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#053A45] aestera">Ladang Singkong</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Ladang singkong di Desa Sukopuro merupakan salah satu usaha pertanian yang penting bagi warga setempat.
              Singkong tumbuh subur di tanah yang subur dan iklim yang mendukung. Ladang ini tersebar di berbagai
              wilayah desa, mulai dari area dataran rendah hingga sedikit berbukit. Singkong tidak hanya menjadi sumber
              pangan alternatif, tetapi juga menjadi komoditas ekonomi yang menguntungkan bagi petani lokal. Hasil panen
              singkong biasanya dijual ke pasar tradisional dan juga diolah menjadi berbagai produk makanan tradisional
              seperti keripik, tepung singkong, dan makanan ringan lainnya.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <img
              src={LadangSingkong}
              alt="Ladang Singkong"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Ladang Tebu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={LadangTebu}
              alt="Ladang Tebu"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#053A45] aestera">Ladang Tebu</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Kebun tebu di desa Sukopuro merupakan salah satu sumber penghasilan utama bagi masyarakat setempat.
              Tanaman tebu tumbuh subur di iklim tropis yang bertemperatur hangat dengan curah hujan yang cukup. Lahan
              tebu di desa ini dikelola secara tradisional maupun semi-modern, dengan menggunakan teknik penanaman yang
              telah turun temurun. Proses budidaya tebu dimulai dari persiapan lahan, penanaman bibit, perawatan,
              penyiraman, dan pemeliharaan rutin. Ketika masa panen tiba, singkong akan siap untuk dipanen dan dijual ke
              pabrik gula terdekat atau pedagang pengumpul. Hasil panen tebu tidak hanya memberikan keuntungan ekonomi
              bagi petani, tetapi juga menjadi bagian penting dari mata pencaharian masyarakat. Selain sebagai sumber
              penghasilan, kebun tebu juga memiliki potensi bagi hasil sampingan di bidang peternakan dan pengolahan
              hasil sampah seperti batang tebu dan daun yang dapat dimanfaatkan menjadi pakan ternak atau kompos.
            </p>
          </div>
        </div>

        {/* Peternakan Sapi Perah */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#053A45] aestera">Peternakan Sapi Perah</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Peternakan sapi perah di Desa Sukopuro merupakan bidang usaha yang berkembang pesat dan menjadi sumber
              utama penghasilan bagi sebagian besar warga desa. Sapi perah yang dipelihara umumnya jenis yang unggul dan
              memberikan produksi susu yang melimpah. Peternakan sapi perah di desa ini berkembang secara alami dan
              didukung oleh kondisi geografis yang mendukung, seperti ketersediaan pakan hijauan yang melimpah dan iklim
              yang sesuai. Selain itu, peternakan sapi perah juga memberikan manfaat tambahan berupa kotoran ternak yang
              bermanfaat sebagai pupuk.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <img
              src={PeternakanSapiPerah}
              alt="Peternakan Sapi Perah"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Kebun Pohon Duren */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={KebunPohonDuren}
              alt="Kebun Pohon Duren"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#053A45] aestera">Kebun Pohon Duren</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Kebun pohon Duren adalah salah satu komoditas yang menjanjikan di Desa Sukopuro. Pohon Duren yang tumbuh
              subur di iklim tropis memberikan hasil panen yang melimpah setiap tahunnya. Duren yang dihasilkan
              memiliki kualitas tinggi dengan rasa yang manis dan aroma yang khas. Selain Duren, kebun ini juga
              ditanami dengan berbagai jenis buah-buahan tropis lainnya seperti rambutan, mangga, dan jeruk. Kebun buah
              Duren yang luas dan tersusun rapi menjadi salah satu daya tarik tersendiri bagi wisata agro di desa ini.
              Selain itu, hasil panen Duren juga menjadi sumber penghasilan tambahan bagi petani setempat, terutama
              saat musim panen tiba yang biasanya berlangsung beberapa bulan dari pekerjaan utama mereka sebagai petani
              padi dan sayuran.
            </p>
          </div>
        </div>

        {/* Lahan Persawahan */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#053A45] aestera">Lahan Persawahan</h2>
          <div className="max-w-4xl mx-auto">
            <img
              src={LahanPersawahan}
              alt="Lahan Persawahan"
              className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
            />
            <p className="text-gray-700 leading-relaxed text-justify">
              Lahan persawahan merupakan salah satu area utama dalam sektor pertanian masyarakat setempat. Sawah yang
              subur dan luas menjadi tulang punggung ekonomi desa, dimana sebagian besar penduduk menggantungkan mata
              pencaharian mereka pada hasil panen padi. Sistem pengairan yang baik memungkinkan sawah selalu hijau yang
              terbentuk dengan baik sehingga dapat mengairi dan menyuburkan seluruh area. Teknologi hijau yang telah
              mengintegrasikan teknologi padi hasil pertanian, khususnya varietas unggul yang tahan terhadap hama dan
              penyakit, serta memiliki produktivitas tinggi. Selain itu, penerapan sistem tanam yang efisien dan
              penggunaan pupuk organik juga turut mendukung keberlanjutan produktivitas pertanian. Selain berfungsi
              sebagai sumber pangan dan ekonomi, hamparan sawah hijau yang luas juga memberikan keindahan panorama alam
              yang mempesona bersama pepohonan yang rindang di sekelilingnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PotensiPertanian
