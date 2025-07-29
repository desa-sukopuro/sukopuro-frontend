"use client"
import { useEffect, useRef } from "react"
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
          [-7.9395, 112.6100],
          [-7.9405, 112.6110],
          [-7.9415, 112.6120],
          [-7.9425, 112.6130],
          [-7.9435, 112.6140],
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
    <div className="relative min-h-screen pb-[180px]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:"url('../src/assets/picture/bg-fix.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "auto",
          backgroundPosition: "center center",
          opacity: 0.4, 
        }}
      />
      <div className="relative z-10">
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-20"
          style={{
            backgroundImage: "url('../src/assets/picture/image-17.png')", 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-black/20 to-transparent"></div>

          <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
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

            <div className="max-w-5xl mx-auto flex justify-center">
              <div className="w-full max-w-[1003px]">
                <div className="bg-[#777777] rounded-t-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-white text-sm font-medium">
                    <img src={googleMapsIcon || "/placeholder.svg"} alt="Google Maps" className="w-4 h-4" />
                    <span
                      style={{
                        paddingLeft: "1px",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Google maps
                    </span>
                  </div>
                </div>

                <div className="relative bg-white rounded-b-2xl overflow-hidden shadow-2xl">
                  <div ref={mapRef} className="w-full h-[500px] md:h-[600px]" id="map" />
                  <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-transparent pt-20 pb-2">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-2xl p-8">
                <p className="text-gray-800 text-justify leading-relaxed text-lg md:text-xl font-medium">
                  Desa Sukopuro secara administrasi merupakan salah satu desa di Kecamatan Jabung, Kabupaten Malang yang
                  terletak diantara 7°56'9" – 7°58'13" LS dan 112°36'45" – 112°37'3" BT. Desa Sukopuro berada di
                  ketinggian berkisar 768 mdpl dengan suhu rata-rata yaitu 22°C. Luas wilayah Desa Sukopuro adalah 651
                  Ha. (Hariri, F. R., n.d.) Desa Sukopuro memiliki 4 dusun yaitu Dusun Loring, Karangrejo, Kepuh dan
                  Pandanrejo. Lahan di Desa Sukopuro didominasi oleh ladang/tegalan yaitu sekitar 59% dari luas wilayah.
                  Sementara pemukiman hanya sekitar 7% dari luas wilayah desa dan didominasi oleh lahan pertanian dengan
                  jenis komoditas tebu dan pohon singkong. (Hariri, F. R., n.d.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetaPage
