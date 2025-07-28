const Footer = () => {
  return (
    <footer className="bg-[#053A45] text-white py-8 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <h2 className="md:text-5xl text-4xl font-semibold mb-2 aestera">Desa Sukopuro</h2>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Kontak</h2>
          <p className="text-sm">Email: info@sukopuro.id</p>
          <p className="text-sm">Telp: (0341) 123456</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Media Sosial</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
