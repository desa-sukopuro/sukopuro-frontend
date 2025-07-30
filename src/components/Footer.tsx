const Footer = () => {
  return (
    <footer className="bg-[#053A45] text-white py-8 px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <h2 className="md:text-4xl text-3xl font-semibold mb-2 aestera leading-tight">
            <span className="block">Desa</span>
            <span className="block mt-2">Sukopuro</span>
          </h2>
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
