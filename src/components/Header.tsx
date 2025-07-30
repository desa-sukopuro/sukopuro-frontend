import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActiveMobile = (path: string) =>
    currentPath === path
      ? "bg-[#ECA804] text-black"
      : "bg-[#014c51] bg-opacity-60 text-white hover:bg-opacity-80";

  const isActiveDesktop = (path: string) =>
    currentPath === path ? "text-[#ECA804]" : "hover:text-[#ECA804]";

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#053A45] backdrop-blur-sm shadow-sm z-50 animate__animated animate__fadeInDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Link to="/" className="w-12 h-12 md:w-15 md:h-15 flex items-center justify-center">
              <img src="/logo desa 2.svg" alt="Logo Desa" className="w-full h-auto" />
            </Link>
            <Link to="/">
              <h1 className="md:text-md text-sm font-bold text-white aestera">Desa Sukopuro</h1>
              <p className="text-sm text-white">Kec. Jabung. Kab. Malang</p>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-white font-medium animate__animated animate__fadeInDown animate__delay-1s">
            <Link to="/" className={isActiveDesktop("/")}>Profil</Link>
            <Link to="/peta" className={isActiveDesktop("/peta")}>Peta</Link>
            <Link to="/potensi" className={isActiveDesktop("/potensi")}>Potensi</Link>
            <Link to="/pengumuman" className={isActiveDesktop("/pengumuman")}>Pengumuman</Link>
            <Link to="/struktur" className={isActiveDesktop("/struktur")}>Struktur</Link>
            <Link to="/administrasi" className={isActiveDesktop("/administrasi")}>Administrasi</Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-sm shadow-lg z-40 animate__animated animate__fadeInDown">
            <div className="bg-[#05363d] bg-opacity-70 p-4 rounded-lg w-full max-w-xs mx-auto space-y-3">
              {[
                { path: "/", label: "Profil" },
                { path: "/peta", label: "Peta" },
                { path: "/potensi", label: "Potensi" },
                { path: "/pengumuman", label: "Pengumuman" },
                { path: "/struktur", label: "Struktur" },
                { path: "/administrasi", label: "Administrasi" },
              ].map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-center px-4 py-2 rounded-xl shadow-md transition-all animate__animated animate__fadeInDown animate__delay-${index + 1}00ms ${isActiveMobile(item.path)}`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
