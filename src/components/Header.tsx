import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#053A45] text-white shadow z-50">
      <nav className="flex items-center justify-between px-3 md:px-6 py-3">
        <div className="flex items-center gap-3">
          <a href="#">
            <img src="/logo desa 2.svg" alt="Logo Desa" className="w-[65px]" />
          </a>
          <div>
            <h1 className="font-custom text-base md:text-xl font-semibold aestera">
              Desa Sukopuro
            </h1>
            <h3 className="text-sm opacity-80">Lorem Ipsum</h3>
          </div>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              width="22"
              height="15"
              viewBox="0 0 22 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3H20.5C21.3284 3 22 2.32843 22 1.5C22 0.671573 21.3284 0 20.5 0H1.5ZM1.5 6C0.671573 6 0 6.67157 0 7.5C0 8.32843 0.671573 9 1.5 9H20.5C21.3284 9 22 8.32843 22 7.5C22 6.67157 21.3284 6 20.5 6H1.5ZM1.5 12C0.671573 12 0 12.6716 0 13.5C0 14.3284 0.671573 15 1.5 15H20.5C21.3284 15 22 14.3284 22 13.5C22 12.6716 21.3284 12 20.5 12H1.5Z"
                fill="white"
              />
            </svg>
          )}
        </button>

        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <li>
            <a href="#profil" className="hover:text-[#ECA804]">
              Profil
            </a>
          </li>
          <li>
            <a href="#peta" className="hover:text-[#ECA804]">
              Peta
            </a>
          </li>
          <li>
            <a href="#potensi" className="hover:text-[#ECA804]">
              Potensi
            </a>
          </li>
          <li>
            <a href="pengumuman" className="hover:text-[#ECA804]">
              Pengumuman
            </a>
          </li>
          <li>
            <a href="#struktur" className="hover:text-[#ECA804]">
              Struktur
            </a>
          </li>
          <li>
            <a href="#administrasi" className="hover:text-[#ECA804]">
              Administrasi
            </a>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-[#053A45] p-2 rounded-xl shadow-inner">
          <li className="bg-[#07424e] rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <a
              href="#profil"
              className="block text-white text-lg text-center px-6 py-3 hover:text-[#ECA804]"
            >
              Profil
            </a>
          </li>
          <li className="bg-[#07424e] rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <a
              href="#peta"
              className="block text-white text-lg text-center px-6 py-3 hover:text-[#ECA804]"
            >
              Peta
            </a>
          </li>
          <li className="bg-[#07424e] rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <a
              href="#potensi"
              className="block text-white text-lg text-center px-6 py-3 hover:text-[#ECA804]"
            >
              Potensi
            </a>
          </li>
          <li className="bg-[#07424e] rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <a
              href="#pengumuman"
              className="block text-white text-lg text-center px-6 py-3 hover:text-[#ECA804]"
            >
              Pengumuman
            </a>
          </li>
          <li className="bg-[#07424e] rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <a
              href="#struktur"
              className="block text-white text-lg text-center px-6 py-3 hover:text-[#ECA804]"
            >
              Struktur
            </a>
          </li>
          <li className="bg-[#07424e] rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <a
              href="#administrasi"
              className="block text-white text-lg text-center px-6 py-3 hover:text-[#ECA804]"
            >
              Administrasi
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
