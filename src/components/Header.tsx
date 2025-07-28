import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#053A45] backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <a href="/" className="w-10 h-10 flex items-center justify-center">
              <img src="/logo desa 2.svg" alt="Logo Desa" className="w-full h-auto" />
            </a>
            <a href="/">
              <h1 className="text-xl font-bold text-white">Desa Sukopuro</h1>
            </a>
          </div>

          <nav className="hidden md:flex space-x-6 text-white font-medium">
            <a href="#profil" className="hover:text-[#ECA804]">Profil</a>
            <a href="#peta" className="hover:text-[#ECA804]">Peta</a>
            <a href="#potensi" className="hover:text-[#ECA804]">Potensi</a>
            <a href="#pengumuman" className="hover:text-[#ECA804]">Pengumuman</a>
            <a href="#struktur" className="hover:text-[#ECA804]">Struktur</a>
            <a href="#administrasi" className="hover:text-[#ECA804]">Administrasi</a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>


        {isOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2  rounded-sm shadow-lg z-40">
            <div className="bg-[#05363d] bg-opacity-70 p-4 rounded-lg w-full max-w-xs mx-auto space-y-3">
              <a href="#" className="block text-center text-white bg-[#014c51] bg-opacity-60 px-4 py-2 rounded-xl shadow-md hover:bg-opacity-80 transition-all">
                Profil
              </a>
              <a href="#" className="block text-center text-white bg-[#014c51] bg-opacity-60 px-4 py-2 rounded-xl shadow-md hover:bg-opacity-80 transition-all">
                Peta
              </a>
              <a href="#" className="block text-center text-white bg-[#014c51] bg-opacity-60 px-4 py-2 rounded-xl shadow-md hover:bg-opacity-80 transition-all">
                Potensi
              </a>
              <a href="#" className="block text-center text-white bg-[#014c51] bg-opacity-60 px-4 py-2 rounded-xl shadow-md hover:bg-opacity-80 transition-all">
                Pengumuman
              </a>
              <a href="#" className="block text-center text-white bg-[#014c51] bg-opacity-60 px-4 py-2 rounded-xl shadow-md hover:bg-opacity-80 transition-all">
                Struktur
              </a>
              <a href="#" className="block text-center text-white bg-[#014c51] bg-opacity-60 px-4 py-2 rounded-xl shadow-md hover:bg-opacity-80 transition-all">
                Administrasi
              </a>
            </div>

          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
