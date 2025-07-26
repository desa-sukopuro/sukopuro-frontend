import React, { useEffect, useRef } from 'react';
import bgPeta from "../assets/picture/image 17.png"

declare global {
  interface Window {
    L: any;
  }
}

const DesaSukopuroPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Leaflet map with free OpenStreetMap tiles
    const initMap = () => {
      if (window.L && mapRef.current) {
        // Sukopuro coordinates
        const sukopuroLat = -7.9463;
        const sukopuroLng = 112.6178;

        const map = window.L.map(mapRef.current, {
          zoomControl: false,
          attributionControl: false
        }).setView([sukopuroLat, sukopuroLng], 13);

        // Add OpenStreetMap tiles (free)
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: ''
        }).addTo(map);

        // Add dotted route path
        const routeCoordinates = [
          [sukopuroLat, sukopuroLng],
          [-7.9453, 112.6168],
          [-7.9443, 112.6158],
          [-7.9463, 112.6178],
          [-7.9473, 112.6188],
          [-7.9483, 112.6198]
        ];

        window.L.polyline(routeCoordinates, {
          color: '#ef4444',
          weight: 3,
          opacity: 0.8,
          dashArray: '10, 10'
        }).addTo(map);
      }
    };

    // Load Leaflet CSS and JS
    if (!window.L) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-teal-800 text-white px-4 md:px-8 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-teal-800 font-bold text-sm">🏛️</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">Desa Sukopuro</h1>
              <p className="text-sm text-teal-200">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:text-teal-200 transition-colors">Profil</a>
            <a href="#" className="text-yellow-400 font-semibold">Peta</a>
            <a href="#" className="hover:text-teal-200 transition-colors">Potensi</a>
            <a href="#" className="hover:text-teal-200 transition-colors">Pengumuman</a>
            <a href="#" className="hover:text-teal-200 transition-colors">Struktur</a>
            <a href="#" className="hover:text-teal-200 transition-colors">Administrasi</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Map */}
      <div 
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgPeta})`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-16 pb-24">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
              }}
            >
              Peta Sukopuro
            </h1>
          </div>

          {/* Map Container */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-700 rounded-t-2xl p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 text-white text-sm">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Google maps</span>
                </div>
              </div>
            </div>
            
            <div className="relative bg-white rounded-b-2xl overflow-hidden">
              <div 
                ref={mapRef} 
                className="w-full h-96 md:h-[500px]"
                id="map"
              />
              
              {/* Location Labels - exactly as shown in image */}
              <div className="absolute top-6 right-16">
                <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-purple-500 text-xs">👥</span>
                  </div>
                  <span>Coban Siuk</span>
                </div>
              </div>

              <div className="absolute top-32 right-8">
                <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-purple-500 text-xs">👥</span>
                  </div>
                  <span>Coban Jahe</span>
                </div>
              </div>

              <div className="absolute bottom-32 left-12">
                <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-purple-500 text-xs">👥</span>
                  </div>
                  <span>Taman Kenongo</span>
                </div>
              </div>

              {/* City label */}
              <div className="absolute top-1/2 left-12 transform -translate-y-1/2">
                <span className="text-gray-700 font-semibold text-xl">Kedungrejo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-800 text-justify leading-relaxed text-base md:text-lg">
              Desa Sukopuro secara administrasi merupakan salah satu desa di Kecamatan Jabung, Kabupaten Malang yang terletak diantara 
              7°56'9" – 7°58'13" LS dan 112°36'45" – 112°37'3" BT. Desa Sukopuro berada di ketinggian berkisar 768 mdpl dengan suhu rata-rata 
              yaitu 22°C. Luas wilayah Desa Sukopuro adalah 651 Ha. (Hariri, F. R., n.d.) Desa Sukopuro memiliki 4 dusun yaitu Dusun Loring, 
              Karangrejo, Kepuh dan Pandanrejo. Lahan di Desa Sukopuro didominasi oleh ladang/tegalan yaitu sekitar 59% dari luas wilayah. 
              Sementara pemukiman hanya sekitar 7% dari luas wilayah desa dan didominasi oleh lahan pertanian dengan jenis komoditas tebu 
              dan pohon singkong. (Hariri, F. R., n.d.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesaSukopuroPage;