import React, { useEffect, useState } from 'react';
import fallback from '/No_Image_Available.svg';
import { Link } from 'react-router-dom';

const sheetID = '1piC9hNJ3pxIIUGX5nzKTiK126GB1bnvzTNqVbjkojpA';
const sheetName = 'Form Responses 1';
const query = 'SELECT A, B, C, D ORDER BY A DESC';
const fallbackImage = fallback;

interface ImageEntry {
  title: string;
  desc: string;
  timestamp: string;
  imageUrl: string;
}

const itemsPerPage = 6;

const ImageGallery: React.FC = () => {
  const [entries, setEntries] = useState<ImageEntry[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?sheet=${sheetName}&tq=${encodeURIComponent(query)}`;

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const json = JSON.parse(text.substring(47).slice(0, -2));
        const rows = json.table.rows;

        const formatted: ImageEntry[] = rows.map((row: any) => {
          const timestamp = row.c[0]?.f || '';
          const title = row.c[1]?.v || '';
          const desc = row.c[2]?.v || '';
          const link = row.c[3]?.v || '';
          const fileIdMatch = link.match(/\/d\/([a-zA-Z0-9_-]+)|id=([a-zA-Z0-9_-]+)/);
          const fileId = fileIdMatch?.[1] || fileIdMatch?.[2];
          const imageUrl = fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=s1000` : fallbackImage;

          return { title, desc, timestamp, imageUrl };
        });

        setEntries(formatted);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
      });
  }, []);

  const totalPages = Math.ceil(entries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEntries = entries.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="pb-10">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentEntries.map((entry, i) => (
          <Link
            key={startIndex + i}
            to={`/pengumuman/${startIndex + i}`}
            state={{ entry }}
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.01] transition cursor-pointer h-full flex flex-col">
              <img
                src={entry.imageUrl}
                onError={(e) => (e.currentTarget.src = fallbackImage)}
                alt={entry.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{entry.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                  {entry.desc.length > 100 ? entry.desc.slice(0, 100) + '...' : entry.desc}
                </p>
                <div className="flex justify-between text-sm mt-auto">
                  <span className="text-gray-500">{entry.timestamp}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 pt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border border-[#063247] px-3 py-1 rounded hover:bg-[#063247] hover:text-white disabled:opacity-50"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded border border-[#063247] ${
                currentPage === page
                  ? 'bg-[#063247] text-white'
                  : 'hover:bg-[#063247] hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border border-[#063247] px-3 py-1 rounded hover:bg-[#063247] hover:text-white disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
