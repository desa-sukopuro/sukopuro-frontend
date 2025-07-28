function Footer() {
  return (
    <footer className="bg-[#053A45] text-white py-8 px-4 mt-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        <div className="flex-1 aestera">
          <h1 className="text-3xl md:text-5xl font-semibold leading-none my-4">Desa</h1>
          <h1 className="text-3xl md:text-5xl font-semibold leading-none">Sukopuro</h1>
        </div>

        <div className="hidden md:block w-px bg-white h-24 mx-4" />

        <div className="flex-1">
          <h3 className="text-5xl font-extrabold mb-3">Halaman</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#profil" className="hover:text-[#ECA804]">Profil</a></li>
            <li><a href="#peta" className="hover:text-[#ECA804]">Peta</a></li>
            <li><a href="#potensi" className="hover:text-[#ECA804]">Potensi</a></li>
            <li><a href="#pengumuman" className="hover:text-[#ECA804]">Pengumuman</a></li>
            <li><a href="#struktur" className="hover:text-[#ECA804]">Struktur</a></li>
            <li><a href="#administrasi" className="hover:text-[#ECA804]">Administrasi</a></li>
          </ul>
        </div>

        <div className="hidden md:block w-px bg-white h-24 mx-4" />

        <div className="flex-1">
          <h3 className="text-5xl font-extrabold mb-3">Kontak</h3>
          <div className="flex items-start gap-2 text-sm mb-1">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="white"/>
            </svg>
            <span>contosukopuro@gmail.com</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.375 1C5.875 1 7.875 5.5 7.875 6C7.875 7 6.375 8 5.875 9C5.375 10 6.375 11 7.375 12C7.765 12.39 9.375 14 10.375 13.5C11.375 13 12.375 11.5 13.375 11.5C13.875 11.5 18.375 13.5 18.375 14C18.375 16 16.875 17.5 15.375 18C13.875 18.5 12.875 18.5 10.875 18C8.875 17.5 7.375 17 4.875 14.5C2.375 12 1.875 10.5 1.375 8.5C0.875 6.5 0.875 5.5 1.375 4C1.875 2.5 3.375 1 5.375 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>+628-2112-2391-99</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
