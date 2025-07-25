import type React from "react"
import pariwisataImg from "../assets/picture/pariwisata.png"
import umkmImg from "../assets/picture/umkm.png"
import pertanianImg from "../assets/picture/pertanian.png"

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
    ]

    return (
        <div className="bg-white text-gray-800 py-16 px-4 max-w-6xl mx-auto">
            
            <div className="pt-8">
                <h1 className="text-4xl font-bold text-[#11403A] mb-2">Potensi Desa</h1>
                <p className="text-lg text-gray-600 mb-10">Segala hal mengenai potensi Desa Sukopuro</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {potensiList.map((item, index) => (
                    <div
                        key={index}
                        className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl"
                    >
                        <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="h-48 w-full object-cover rounded-t-2xl"
                        />
                        <div className="bg-white -mt-4 relative rounded-t-2xl p-6">
                            <h2 className="text-xl font-semibold text-[#11403A] mb-2">{item.title}</h2>
                            <p className="text-sm text-gray-700 mb-4 text-justify">{item.description}</p>

                            <a
                                href={item.link}
                                className="inline-block bg-yellow-400 text-black px-6 py-2.5 text-sm font-semibold rounded-lg hover:bg-[#ECA804] hover:shadow-md transition-all duration-200"
                            >
                                Selengkapnya →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 mx-8 md:mx-16 lg:mx-24 text-justify text-gray-700 text-base leading-relaxed">
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
    )
}

export default PotensiDesa
