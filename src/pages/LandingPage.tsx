import Carousel from "../components/Carousel";
export default function LandingPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: "url('./src/assets/picture/bg-fix.png')",
                    backgroundRepeat: "repeat-y",
                    backgroundSize: "auto auto",
                    backgroundPosition: "center center",
                    opacity: 0.4,
                }}
            />
            <main className="pt-1">
                <Carousel />
                <section className="bg-gradient-to-b from-[#053A45] to-[#0D1C1F] py-8 md:py-12 lg:py-16 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#ECA804] aestera">Tentang Sukopuro</h2>
                        <p className="text-white text-base md:text-lg leading-relaxed mb-3 md:mb-4 text-justify max-w-4xl mx-auto mb-12">
                            Desa Sukopuro merupakan sebuah desa indah yang berada di Kecamatan Jabung, Kabupaten Malang. Desa ini berada di ketinggian antara 548 hingga 768 meter di atas permukaan laut, sehingga terkenal sebagai desa yang memiliki suhu yang sejuk dengan rata-rata sekitar 22°C. Sebagian besar wilayah desa ini merupakan lahan pertanian  yang mencakup sekitar 59% dari total luas desa. Komoditas utama yang dibudidayakan di Desa Sukopuro adalah tebu dan pohon singkong.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <img src="./src/assets/picture/peta-logo.svg" alt="" />
                        </div>
                    </div>
                </section>
                <section className="py-8 md:py-12 lg:py-16 px-4">

                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center text-gray-800 aestera">Sejarah Sukopuro</h2>

                        <div className="space-y-8">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="md:flex">
                                    <div className="md:w-1/2">
                                        <img
                                            src="./src/assets/picture/peta.png"
                                            alt="Peta Kuno"
                                            className="w-full h-64 md:h-full object-cover"
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-6">
                                        <p className="text-gray-700 text-justify leading-relaxed">
                                            Desa Sukopuro memiliki sejarah panjang dan unik. Asal-usul desa ini berkaitan erat dengan perpindahan sekelompok orang dari wilayah Mataram, Jawa Tengah, setelah terjadi pergolakan atau perang di kerajaan tersebut. Sekelomok tujuh orang yang terdiri dari enam pria dan satu wanita, melakukan perjalanan ke arah timur hingga menetap di Winongan, Kabupaten Pasuruan. Mereka kemudian menyebar dan membuka hutan di beberapa daerah, termasuk wilayah yang kini dikenal sebagai Desa Sukopuro. Dua tokoh utama yang membuka hutan di daerah ini adalah Ki Basiyah (Resotaruno) dan Ki Rebo (Resodjoyo) yang menetap di wilayah Loring, cikal bakal Desa Sukopuro.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="md:flex md:flex-row-reverse">
                                    <div className="md:w-1/2">
                                        <img
                                            src="./src/assets/picture/elo.png"
                                            alt="Buah Lempung"
                                            className="w-full h-64 md:h-full object-cover"
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-6">
                                        <p className="text-gray-700 leading-relaxed text-justify">
                                            Seiring berjalannya waktu, daerah-daerah yang sebelumnya merupakan hutan berkembang menjadi beberapa dukuh yang dihuni oleh pendatang baru yang turut membantu pembabatan dan perluasan wilayah. Nama "Loring" diberikan berdasarkan ciri khas pohon elo besar yang ditemukan dalam kondisi kering saat proses pembukaan lahan. Pada akhirnya, lima dukuh yang terdiri dari Loring, Kodok, Bayung, Cincing, dan Sumberpitu digabungkan pada 12 Juli 1924 oleh pemerintah Hindia Belanda dan tokoh masyarakat setempat dengan nama baru, yaitu “Sukopuro”. Nama ini berasal dari kata “Suko” (suka) dan “Puro” (gapura atau jalan keluar), yang jika digabungkan bermakna suka memberi petunjuk atau jalan keluar serta suka memberi maaf.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden my-10">
                        <div className="md:h-90">
                            <img
                                src="./src/assets/picture/bromo.png"
                                alt="Gunung Bromo"
                                className="w-full h-64 md:h-full object-cover"
                            />
                        </div>
                        <div className="md:flex">
                            <div className=" p-6">
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    Setiap dukuh yang tergabung dalam wilayah Desa Sukopuro memiliki sejarah penamaan yang khas dan mencerminkan keunikan lokal. Misalnya, Karangrejo dulunya bernama Kodok karena terdapat kolam yang tak pernah kering sepanjang tahun. Dusun Kepuh dulunya dikenal dengan nama Bayung yang berasal dari tanaman kacang panjang (lembayung) yang merambat pada pohon kepuh. Pandanrejo dahulu disebut Cincing yang berdasarkan kebiasaan orang yang harus mengangkat celana atau kain karena jalanan licin dan menanjak. Sementara itu, Sumberpitu dinamakan demikian karena banyaknya mata air di wilayah tersebut. Dalam perkembangan sejarahnya, Desa Sukopuro juga pernah menjadi lokasi strategis pada masa revolusi kemerdekaan dan bahkan sempat menjadi ibu kota Kecamatan Jabung pada tahun 1948.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}