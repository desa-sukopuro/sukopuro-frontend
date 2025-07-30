"use client"
import type React from "react"
import strukturDesaImage from "/struktur-desa.svg"


const OrganizationalStructure: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background with opacity using pseudo-element */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('./bg-fix.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "auto",
          backgroundPosition: "center center",
          opacity: 0.4,
        }}
      />

      <section className="py-8 md:py-12 lg:py-16 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          {/* Header - Left aligned */}
          <div className="mb-8 md:mb-12 text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#11403A] aestera">Struktur Perangkat</h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-3 md:mb-4 text-justify text-gray-700">Struktur Organisasi dan Tata Kerja</p>
          </div>
          
          {/* Struktur Desa Image */}
          <div className="flex justify-center">
            <img 
              src={strukturDesaImage} 
              alt="Struktur Organisasi Desa Sukopuro" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrganizationalStructure