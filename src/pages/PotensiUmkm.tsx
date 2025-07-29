"use client"

import { useState } from "react"
import Bakso from "../assets/picture/Bakso Balai Desa.png"
import Boba from "../assets/picture/Boba Susu.png"
import Chalet from "../assets/picture/Chalet.png"
import Keripik from "../assets/picture/Keripik Khabibah.png.png"
import MamiQu from "../assets/picture/MamiQu.png"
import WarungBarokah from "../assets/picture/Warung Barokah.png"
import UMKM from "../assets/picture/UMKM.png"
import ProdukBoba from "../assets/picture/produk boba.png"
import ProdukBakso from "../assets/picture/Produk Bakso.png"
import Produkchalet from "../assets/picture/produk chalet.png"
import produkMamiQu from "../assets/picture/produk MamiQu.png"
import ProdukKeripik from "../assets/picture/Produk Keripik.png"
import ProdukBarokah from "../assets/picture/Produk Barokah.png"
import Panah from "../assets/picture/panah kiri.png"

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

  // Calculate pagination
  const totalPages = Math.ceil(umkmData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = umkmData.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen overflow-hidden relative">
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
      <div
        className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${UMKM})`,
        }}

      >
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        <div className="relative h-screen w-full">
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white text-center aestera">UMKM</h1>
          </div>

          <img
            src={Panah}
            alt="Ikon Kiri"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 md:w-10 md:h-10 object-contain"
          />
        </div>


      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* UMKM Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Main layout: gambar utama dan konten */}
              <div className="flex">
                <div className="w-1/3 h-36 overflow-hidden flex-shrink-0">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 p-4">
                  <h3 className="text-base font-bold text-[#053A45] aestera mb-3 leading-tight">{item.name}</h3>
                  <div className="flex gap-1 items-start">
                    <p className="text-gray-600 text-xs leading-relaxed flex-1">{item.description}</p>
                    <div className="flex-shrink-0 w-20">
                      <img
                        src={item.productImage || "/placeholder.svg"}
                        alt={`${item.name} product`}
                        className="w-full max-h-16 object-contain rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge harga selalu di bawah card */}
              <div className="p-4 pt-2 flex justify-end">
                <span className="bg-[#ECA804] text-white px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {"<"}
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded-lg border ${currentPage === page
                  ? "bg-[#053A45] text-white border-[#053A45]"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {">"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PotensiUmkm
