"use client"

import { useState } from "react"
import Bakso from "/Bakso Balai Desa.png"
import Boba from "/Boba Susu.png"
import Chalet from "/Chalet.png"
import Keripik from "/Keripik Khabibah.png.png"
import MamiQu from "/MamiQu.png"
import WarungBarokah from "/Warung Barokah.png"
import UMKM from "/UMKM.png"
import ProdukBoba from "/produk boba.png"
import ProdukBakso from "/Produk Bakso.png"
import Produkchalet from "/produk chalet.png"
import produkMamiQu from "/produk MamiQu.png"
import ProdukKeripik from "/Produk Keripik.png"
import ProdukBarokah from "/Produk Barokah.png"
import Panah from "/panah kiri.png"

interface UmkmItem {
  id: number
  name: string
  image: string
  description: string
  price: string
  productImage: string
}

function PotensiUmkm() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const umkmData: UmkmItem[] = [
    {
      id: 1,
      name: "Boba Susu Nusantara",
      image: Boba,
      description:
        "Boba susu nusantara adalah minuman trendy dari Desa Sukopuro yang menggabungkan gelembung tapioca dengan susu. Rasa lokal seperti pandan, gula merah, dan kopi sering ditambahkan.",
      price: "Harga : Rp3.000-Rp5.000",
      productImage: ProdukBoba,
    },
    {
      id: 2,
      name: "Warung Barokah",
      image: WarungBarokah,
      description:
        "Warung makan 'Barokah' di Desa Sukopuro menyediakan menu nasi kuning, nasi uduk, nasi putih dengan lauk ayam atau telur, serta es campur dan gorengan.",
      price: "Harga : Rp6.000-Rp8.000",
      productImage: ProdukBarokah,
    },
    {
      id: 3,
      name: "Bakso Balai Desa",
      image: Bakso,
      description:
        "Bakso dengan daging sapi pilihan dan bumbu rahasia keluarga, disajikan dengan kuah kaldu yang kaya rasa dan mie yang kenyal.",
      price: "Harga : Rp500-Rp5.000",
      productImage: ProdukBakso,
    },
    {
      id: 4,
      name: "Keripik Khabibah",
      image: Keripik,
      description:
        "Keripik singkong renyah dengan berbagai varian rasa, diproduksi dengan teknologi modern namun tetap mempertahankan cita rasa tradisional.",
      price: "Harga : Rp500-Rp5.000",
      productImage: ProdukKeripik,
    },
    {
      id: 5,
      name: "Chalet Bromo Restaurant",
      image: Chalet,
      description:
        "Chalet Bromo Restaurant & Lounge menawarkan pengalaman bersantai yang memadukan estetika desain, masakan ala barat-nusantara, dan pemandangan alam pegunungan.",
      price: "Harga : Rp8.000-Rp200.000",
      productImage: Produkchalet,
    },
    {
      id: 6,
      name: "MamiQu Frozen Food and Bakery",
      image: MamiQu,
      description:
        "Mamiqu Frozen Food and Bakery merupakan sebuah toko yang menyediakan berbagai bahan untuk kue dan makanan beku seperti sosis, bakso, dll.",
      price: "Harga : Rp2.000-Rp100.000",
      productImage: produkMamiQu,
    },
  ]

  const totalPages = Math.ceil(umkmData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = umkmData.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen overflow-hidden relative">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: "url('./bg-fix.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "auto",
          backgroundPosition: "center center",
        }}
      />

      {/* Hero */}
      <div
        className="relative h-[70vh] sm:h-[85vh] lg:h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${UMKM})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-white text-center aestera">UMKM</h1>
        </div>
        <img
          src={Panah}
          alt="Ikon Kiri"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 md:w-10 md:h-10 object-contain"
        />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Konten */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 aestera mb-4">
            UMKM Desa Sukopuro
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-justify max-w-4xl mx-auto mb-12">
            Usaha Mikro, Kecil, dan Menengah (UMKM) di Desa Sukopuro berkembang dengan berbagai produk lokal unggulan yang mengandalkan bahan baku dari hasil pertanian desa setempat.
          </p>

          {/* Grid UMKM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 w-full h-48 sm:h-auto overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:w-2/3 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#053A45] aestera mb-2">{item.name}</h3>
                      <p className="text-sm text-gray-600 text-justify mb-3">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <img
                        src={item.productImage}
                        alt={`${item.name} product`}
                        className="w-16 h-16 object-contain"
                      />
                      <span className="bg-[#ECA804] text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 border rounded-md font-semibold ${
                    currentPage === page
                      ? "bg-[#053A45] text-white border-[#053A45]"
                      : "text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default PotensiUmkm
