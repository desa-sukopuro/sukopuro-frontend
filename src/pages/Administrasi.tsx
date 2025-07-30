import React, { useEffect, useState } from 'react';

const sheetID = '1ilSULS5Heue0v0z0yhTix0h6Eeyyn6-bFSvZMz21Bo8';
const sheetName = 'Form Responses 1';
const query = 'SELECT A, B, C, D ORDER BY A DESC';

interface DocumentEntry {
  timestamp: string;
  title: string;
  desc: string;
  docLink: string;
}

const itemsPerPage = 6;

const Administrasi: React.FC = () => {
  const [entries, setEntries] = useState<DocumentEntry[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?sheet=${sheetName}&tq=${encodeURIComponent(query)}`;

    fetch(url)
      .then(res => res.text())
      .then(text => {
        const json = JSON.parse(text.substring(47).slice(0, -2));
        const rows = json.table.rows;

        const formatted: DocumentEntry[] = rows.map((row: any) => {
          const timestamp = row.c[0]?.f || '';
          const title = row.c[1]?.v || '';
          const desc = row.c[2]?.v || '';
          const link = row.c[3]?.v || '#';
          return { timestamp, title, desc, docLink: link };
        });

        setEntries(formatted);
      })
      .catch(err => {
        console.error('Document fetch error:', err);
      });
  }, []);

  const totalPages = Math.ceil(entries.length / itemsPerPage);
  const currentEntries = entries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('./src/assets/picture/bg-fix.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "auto",
          backgroundPosition: "center center",
          opacity: 0.4,
        }}
      />

      <main className="min-h-screen">
        {/* Hero section */}
        <section className="text-[#014c51] py-8 md:py-12 lg:py-16 px-4 mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 aestera">Administrasi</h1>
                <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4 text-justify p-2">
                  Menyediakan layanan administrasi kependudukan secara online, termasuk pembuatan Kartu Tanda Penduduk (KTP), Akta Kelahiran, Akta Kematian, serta layanan perubahan data pada Kartu Keluarga (KK).
                </p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition duration-300 flex items-center gap-2 mx-auto lg:mx-0">
                  Akses Daftar Layanan
                  <span>→</span>
                </button>
              </div>

              <div className="flex-shrink-0 order-1 lg:order-2">
                <div className="w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 relative">
                  <img src="./src/assets/picture/administrasi.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produk Hukum section */}
        <section className="py-8 md:py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 aestera text-[#014c51]">Produk Hukum</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentEntries.map((entry, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-5 hover:scale-[1.01] transition flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{entry.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {entry.desc.length > 100 ? entry.desc.slice(0, 100) + '...' : entry.desc}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>{entry.timestamp}</span>
                    <a
                      href={entry.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#014c51] px-3 py-1 rounded bg-yellow-400 hover:bg-yellow-500"
                    >
                      Lihat Dokumen →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="border border-[#014c51] px-3 py-1 rounded hover:bg-[#014c51] hover:text-white disabled:opacity-50"
                >
                  &lt;
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded border border-[#014c51] ${
                      currentPage === page
                        ? 'bg-[#014c51] text-white'
                        : 'hover:bg-[#014c51] hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="border border-[#014c51] px-3 py-1 rounded hover:bg-[#014c51] hover:text-white disabled:opacity-50"
                >
                  &gt;
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Administrasi;
