"use client"

import { useEffect, useRef } from "react"
import bgPeta from "../assets/picture/image-17.png?url"
import googleMapsIcon from "../assets/picture/GoogleMaps.svg"

declare global {
  interface Window {
    L: any
  }
}

const PetaPage = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = () => {
      if (window.L && mapRef.current) {
        const sukopuroLat = -7.9463
        const sukopuroLng = 112.6178
        const map = window.L.map(mapRef.current, {
          zoomControl: false,
          attributionControl: false,
        }).setView([sukopuroLat, sukopuroLng], 13)

        window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "",
        }).addTo(map)

        const routeCoordinates = [
          [sukopuroLat, sukopuroLng],
          [-7.9453, 112.6168],
          [-7.9443, 112.6158],
          [-7.9463, 112.6178],
          [-7.9473, 112.6188],
          [-7.9483, 112.6198],
        ]

        window.L.polyline(routeCoordinates, {
          color: "#ef4444",
          weight: 3,
          opacity: 0.8,
          dashArray: "10, 10",
        }).addTo(map)
      }
    }

    if (!window.L) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css"
      document.head.appendChild(link)

      const script = document.createElement("script")
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white pt-20">
      

      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat "
                        style={{ backgroundImage: `url(${bgPeta})` }}

      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-black/20 to-transparent"></div>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h1
              className="text-7xl md:text-7xl lg:text-8xl font-bold text-white mb-8"
              style={{
                textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
                letterSpacing: "0.02em",
              }}
            >
              Peta Sukopuro
            </h1>
          </div>

          {/* Map Container */}
          <div className="max-w-5xl mx-auto">
            {/* Browser Window Header */}
            <div className="bg-[#777777] rounded-t-2xl p-4 flex items-center justify-between w-[1003px]">
              <div className="flex items-center space-x-2 text-white text-sm font-medium">
                <img src={googleMapsIcon || "/placeholder.svg"} alt="Google Maps" className="w-4 h-4" />
                <span style={{ 
                  paddingLeft: "-1px",
                  fontSize: "20px",
                  fontWeight: "bold",
                 }}>Google maps</span>
              </div>
            </div>

            {/* Map Content */}
            <div className="relative bg-white rounded-b-2xl overflow-hidden shadow-2xl w-[1003px]">
              <div ref={mapRef} className="w-[1003px] h-[500px] md:h-[600px]" id="map" />

              
              {/* City Label */}
              <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
                <span className="text-gray-800 font-bold text-2xl">Kedungrejo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white pt-20 pb-2">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-800 text-justify leading-relaxed text-lg md:text-xl font-medium">
              Desa Sukopuro secara administrasi merupakan salah satu desa di Kecamatan Jabung, Kabupaten Malang yang
              terletak diantara 7°56'9" – 7°58'13" LS dan 112°36'45" – 112°37'3" BT. Desa Sukopuro berada di ketinggian
              berkisar 768 mdpl dengan suhu rata-rata yaitu 22°C. Luas wilayah Desa Sukopuro adalah 651 Ha. (Hariri, F.
              R., n.d.) Desa Sukopuro memiliki 4 dusun yaitu Dusun Loring, Karangrejo, Kepuh dan Pandanrejo. Lahan di
              Desa Sukopuro didominasi oleh ladang/tegalan yaitu sekitar 59% dari luas wilayah. Sementara pemukiman
              hanya sekitar 7% dari luas wilayah desa dan didominasi oleh lahan pertanian dengan jenis komoditas tebu
              dan pohon singkong. (Hariri, F. R., n.d.)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetaPage

// "use client"

// import { useEffect, useRef } from "react"
// import bgPeta from "../assets/picture/image 17.png"
// import googleMapsIcon from "../assets/picture/Google_Maps_icon_(2020).svg 1.svg"

// Add this right after the imports
// console.log("Background image path:", bgPeta)

// declare global {
//   interface Window {
//     L: any
//   }
// }

// const PetaPage = () => {
//   const mapRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const initMap = () => {
//       if (window.L && mapRef.current) {
//         // Clear any existing map
//         if (mapRef.current._leaflet_id) {
//           mapRef.current._leaflet_id = null
//         }

//         const sukopuroLat = -7.9463
//         const sukopuroLng = 112.6178
//         const map = window.L.map(mapRef.current, {
//           zoomControl: false,
//           attributionControl: false,
//         }).setView([sukopuroLat, sukopuroLng], 13)

//         window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//           attribution: "",
//         }).addTo(map)

//         const routeCoordinates = [
//           [sukopuroLat, sukopuroLng],
//           [-7.9453, 112.6168],
//           [-7.9443, 112.6158],
//           [-7.9463, 112.6178],
//           [-7.9473, 112.6188],
//           [-7.9483, 112.6198],
//         ]

//         window.L.polyline(routeCoordinates, {
//           color: "#ef4444",
//           weight: 3,
//           opacity: 0.8,
//           dashArray: "10, 10",
//         }).addTo(map)
//       }
//     }

//     if (!window.L) {
//       const link = document.createElement("link")
//       link.rel = "stylesheet"
//       link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css"
//       document.head.appendChild(link)

//       const script = document.createElement("script")
//       script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"
//       script.onload = initMap
//       document.head.appendChild(script)
//     } else {
//       initMap()
//     }

//     return () => {
//       if (mapRef.current && window.L) {
//         // Destroy the map instance when the component unmounts
//         if (mapRef.current._leaflet_id) {
//           const map = window.L.DomUtil.get(mapRef.current.id)
//           if (map) {
//             window.L.DomEvent.off(map, "unload", map.remove, map)
//           }
//         }
//       }
//     }
//   }, [])

//   return (
//     <div className="min-h-screen bg-white pt-20">
//       {/* Header - matching Figma design */}
//       <header className="fixed top-0 left-0 right-0 bg-[#1a5f5f] text-white shadow-lg z-50">
//         <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
//           <div className="flex items-center space-x-4">
//             <div className="w-12 h-12 bg-[#f4d03f] rounded-full flex items-center justify-center">
//               <span className="text-[#1a5f5f] font-bold text-lg">🏛️</span>
//             </div>
//             <div>
//               <h1 className="font-bold text-xl">Desa Sukopuro</h1>
//               <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet</p>
//             </div>
//           </div>
//           <div className="hidden md:flex space-x-8 text-base font-medium">
//             <a href="#" className="hover:text-[#f4d03f] transition-colors">
//               Profil
//             </a>
//             <a href="#" className="text-[#f4d03f] font-semibold">
//               Peta
//             </a>
//             <a href="#" className="hover:text-[#f4d03f] transition-colors">
//               Potensi
//             </a>
//             <a href="#" className="hover:text-[#f4d03f] transition-colors">
//               Pengumuman
//             </a>
//             <a href="#" className="hover:text-[#f4d03f] transition-colors">
//               Struktur
//             </a>
//             <a href="#" className="hover:text-[#f4d03f] transition-colors">
//               Administrasi
//             </a>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section with Background Image */}
//       <div
//         className="relative min-h-screen bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${bgPeta})`,
//         }}
//       >
//         {/* Temporary debugging info - remove after fixing */}
//         <div className="absolute top-20 left-4 bg-black bg-opacity-75 text-white p-2 text-xs z-50">
//           <div>bgPeta value: {bgPeta || "undefined"}</div>
//           <div>Background URL: {bgPeta ? `url(${bgPeta})` : "none"}</div>
//         </div>

//         {/* Dark overlay */}
//         {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

//         {/* Content */}
//         <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
//           {/* Main Title */}
//           <div className="text-center mb-16">
//             <h1
//               className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8"
//               style={{
//                 fontFamily: "serif",
//                 textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
//                 letterSpacing: "0.02em",
//               }}
//             >
//               Peta Sukopuro
//             </h1>
//             {/* Test with a working image - add this temporarily after the title */}
//             <div className="text-center mb-8">
//               <div
//                 className="w-64 h-32 mx-auto bg-cover bg-center border-2 border-white"
//                 style={{ backgroundImage: `url(${bgPeta})` }}
//               >
//                 <p className="text-white bg-black bg-opacity-50 p-2">Test background</p>
//               </div>
//             </div>
//           </div>

//           {/* Map Container */}
//           <div className="max-w-5xl mx-auto">
//             {/* Browser Window Header */}
//             <div className="bg-gray-600 rounded-t-2xl p-4 flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                 <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//               </div>
//               <div className="flex items-center space-x-2 text-white text-sm font-medium">
//                 <img src={googleMapsIcon || "/placeholder.svg"} alt="Google Maps" className="w-4 h-4" />
//                 <span>Google maps</span>
//               </div>
//             </div>

//             {/* Map Content */}
//             <div className="relative bg-white rounded-b-2xl overflow-hidden shadow-2xl">
//               <div ref={mapRef} className="w-full h-[500px] md:h-[600px]" id="map" />

//               {/* Location Markers - positioned as in Figma */}
//               <div className="absolute top-8 right-20">
//                 <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-2">
//                   <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
//                     <span className="text-purple-600 text-xs">👥</span>
//                   </div>
//                   <span>Coban Siuk</span>
//                 </div>
//               </div>

//               <div className="absolute top-32 right-12">
//                 <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-2">
//                   <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
//                     <span className="text-purple-600 text-xs">👥</span>
//                   </div>
//                   <span>Coban Jahe</span>
//                 </div>
//               </div>

//               <div className="absolute bottom-40 left-16">
//                 <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-2">
//                   <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
//                     <span className="text-purple-600 text-xs">👥</span>
//                   </div>
//                   <span>Taman Kenongo</span>
//                 </div>
//               </div>

//               {/* City Label */}
//               <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
//                 <span className="text-gray-800 font-bold text-2xl">Kedungrejo</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Description Section */}
//       <div className="bg-white py-20">
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             <p className="text-gray-800 text-justify leading-relaxed text-lg md:text-xl font-medium">
//               Desa Sukopuro secara administrasi merupakan salah satu desa di Kecamatan Jabung, Kabupaten Malang yang
//               terletak diantara 7°56'9" – 7°58'13" LS dan 112°36'45" – 112°37'3" BT. Desa Sukopuro berada di ketinggian
//               berkisar 768 mdpl dengan suhu rata-rata yaitu 22°C. Luas wilayah Desa Sukopuro adalah 651 Ha. (Hariri, F.
//               R., n.d.) Desa Sukopuro memiliki 4 dusun yaitu Dusun Loring, Karangrejo, Kepuh dan Pandanrejo. Lahan di
//               Desa Sukopuro didominasi oleh ladang/tegalan yaitu sekitar 59% dari luas wilayah. Sementara pemukiman
//               hanya sekitar 7% dari luas wilayah desa dan didominasi oleh lahan pertanian dengan jenis komoditas tebu
//               dan pohon singkong. (Hariri, F. R., n.d.)
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer - matching Figma design */}
//       <footer className="bg-[#1a5f5f] text-white py-12 px-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
//           {/* Desa Sukopuro Section */}
//           <div className="flex-1">
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">Desa</h1>
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight">Sukopuro</h1>
//           </div>

//           {/* Divider */}
//           <div className="hidden md:block w-px bg-white h-32 mx-8" />

//           {/* Halaman Section */}
//           <div className="flex-1">
//             <h3 className="text-4xl md:text-5xl font-bold mb-6">Halaman</h3>
//             <ul className="space-y-3 text-base">
//               <li>
//                 <a href="#profil" className="hover:text-[#f4d03f] transition-colors">
//                   Profil
//                 </a>
//               </li>
//               <li>
//                 <a href="#peta" className="hover:text-[#f4d03f] transition-colors">
//                   Peta
//                 </a>
//               </li>
//               <li>
//                 <a href="#potensi" className="hover:text-[#f4d03f] transition-colors">
//                   Potensi
//                 </a>
//               </li>
//               <li>
//                 <a href="#pengumuman" className="hover:text-[#f4d03f] transition-colors">
//                   Pengumuman
//                 </a>
//               </li>
//               <li>
//                 <a href="#struktur" className="hover:text-[#f4d03f] transition-colors">
//                   Struktur
//                 </a>
//               </li>
//               <li>
//                 <a href="#administrasi" className="hover:text-[#f4d03f] transition-colors">
//                   Administrasi
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Divider */}
//           <div className="hidden md:block w-px bg-white h-32 mx-8" />

//           {/* Kontak Section */}
//           <div className="flex-1">
//             <h3 className="text-4xl md:text-5xl font-bold mb-6">Kontak</h3>
//             <div className="space-y-4 text-base">
//               <div className="flex items-start gap-3">
//                 <svg
//                   width="20"
//                   height="16"
//                   viewBox="0 0 20 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mt-1"
//                 >
//                   <path
//                     d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
//                     fill="white"
//                   />
//                 </svg>
//                 <span>contohsukopuro@gmail.com</span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mt-1"
//                 >
//                   <path
//                     d="M5.375 1C5.875 1 7.875 5.5 7.875 6C7.875 7 6.375 8 5.875 9C5.375 10 6.375 11 7.375 12C7.765 12.39 9.375 14 10.375 13.5C11.375 13 12.375 11.5 13.375 11.5C13.875 11.5 18.375 13.5 18.375 14C18.375 16 16.875 17.5 15.375 18C13.875 18.5 12.875 18.5 10.875 18C8.875 17.5 7.375 17 4.875 14.5C2.375 12 1.875 10.5 1.375 8.5C0.875 6.5 0.875 5.5 1.375 4C1.875 2.5 3.375 1 5.375 1Z"
//                     stroke="white"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span>+628-2112-2391-99</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default PetaPage
