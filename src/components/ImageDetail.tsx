import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import fallback from '../assets/picture/No_Image_Available.svg';

const ImageDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const entry = location.state?.entry;

  if (!entry) {
    return (
      <div className="text-center mt-20">
        <p>Data not found.</p>
        <button onClick={() => navigate('/')} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl font-semibold mb-2">{entry.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{entry.timestamp}</p>
      <img
        src={entry.imageUrl}
        onError={(e) => (e.currentTarget.src = fallback)}
        alt={entry.title}
        className="w-full h-auto rounded-xl shadow mb-6"
      />
      <p className="text-base text-gray-700 whitespace-pre-line">{entry.desc}</p>
    </div>
  );
};

export default ImageDetail;
