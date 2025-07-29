import React, { useEffect, useState } from 'react';
import fallback from '../assets/picture/No_Image_Available.svg'
import { Link } from 'react-router-dom';

const sheetID = '1Qqzs4O9nnBRUlA2wdO0JVS_qMP8oRGesCun3HN-VARs';
const sheetName = 'Form Responses 1';
const query = 'SELECT A, B, C, D ORDER BY A DESC';
const fallbackImage = fallback;

interface ImageEntry {
  title: string;
  desc: string;
  timestamp: string;
  imageUrl: string;
}

const ImageGallery: React.FC = () => {
  const [entries, setEntries] = useState<ImageEntry[]>([]);

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

  return (
    <section className="px-6 md:px-25 pb-10">
      <h1 className="text-4xl font-aestera text-[#063247] mt-20 mb-4">Galeri Gambar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((entry, i) => (
          <Link to={`/pengumuman/${i}`} state={{ entry }}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.01] transition cursor-pointer">
              <img
                src={entry.imageUrl}
                onError={(e) => (e.currentTarget.src = fallbackImage)}
                alt={entry.title}
                className="w-full h-60 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{entry.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {entry.desc.length > 100 ? entry.desc.slice(0, 100) + '...' : entry.desc}
                </p>
                <div className="flex justify-between text-sm">
                  <span>📅 {entry.timestamp}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;

