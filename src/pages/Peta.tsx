"use client"

import { useEffect, useRef } from "react"
import bgPeta from "../assets/picture/image 17.png?url"
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
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: bgPeta ? `url(${bgPeta})` : "none",
        }}
        onLoad={() => console.log("Background loaded")}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8"
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
